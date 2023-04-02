import axios from "axios";
import { Base64, DiscordFetch } from "lib/functions";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

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

  const response = NextResponse.next();

  const nowTime = new Date();
  const randCode = Math.random().toString(36).substring(2);
  const timeCookie = nowTime.getTime() - 1_293_840_000;

  let cookieToken = `${Base64.encode(fetchUsersData.id)}.${Base64.encode(
    timeCookie.toString()
  )}.${Base64.encode(randCode)}`;

  response.cookies.set({
    name: "token",
    value: cookieToken,
    maxAge: 60000 * 60 * 24 * 7,
  });

  res.send({ fetchUsersData });
};

export default Verify;
