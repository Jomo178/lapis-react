import { Website } from "@models";
import { Base64, DiscordFetch, create } from "lib/functions";
import { connectMongoDB } from "lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies, setCookie } from "nookies";

const Verify = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code, state } = req.query as Record<string, string>;

  let fetchedSecretData = await DiscordFetch.secret(
    res,
    "authorization_code",
    "code"
  );

  if (!fetchedSecretData)
    return res
      .status(400)
      .send({ status: 400, message: "something went wrong" });

  let fetchUsersData = await DiscordFetch.user(
    "Bearer",
    fetchedSecretData.access_token
  );

  if (!fetchUsersData)
    return res
      .status(400)
      .send({ status: 400, message: "something went wrong" });

  const nowTime = new Date();
  const randCode = Math.random().toString(36).substring(2);
  const timeCookie = nowTime.getTime() - 1_293_840_000;

  let cookieToken = `${Base64.encode(fetchUsersData.id)}.${Base64.encode(
    timeCookie.toString()
  )}.${Base64.encode(randCode)}`;

  setCookie({ res }, "token", cookieToken, {
    maxAge: 60000 * 60 * 24 * 7,
    path: "/",
  });

  // await connectMongoDB();
  // let findUser = await Website.findOne({ userID: fetchUsersData.id });
  // if (!findUser)
  //   findUser = await create.website(
  //     fetchUsersData.id,
  //     "member",
  //     false,
  //     fetchedSecretData.access_token,
  //     fetchedSecretData.refresh_token,
  //     fetchedSecretData.expires_in,
  //     fetchUsersData.email,
  //     cookieToken,
  //     randCode
  //   );

  res.send({ fetchUsersData });
};

export default Verify;
