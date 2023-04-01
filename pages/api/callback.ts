import axios from "axios";
import { Base64, DiscordFetch } from "lib/functions";
import { NextApiRequest, NextApiResponse } from "next";

const Verify = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code, state } = req.query as Record<string, string>;

  let fetchedSecretData = await DiscordFetch.secret("authorization_code", code);

  if (fetchedSecretData == undefined)
    return res
      .status(400)
      .send({ status: 400, message: "something went wrong" });

  let fetchUsersData = await DiscordFetch.user(
    "Bearer",
    fetchedSecretData.access_token
  );

  if (fetchUsersData == undefined)
    return res
      .status(400)
      .send({ status: 400, message: "something went wrong" });

  let token = "";

  const userID = Base64.encode(fetchUsersData.id);
  const time = new Date().getTime() - 1_293_840_000;
  const date = Base64.encode(time.toString());

  res.send({ userID, date, fetchUsersData });
};

export default Verify;
