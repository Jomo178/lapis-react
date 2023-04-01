import axios from "axios";
import { Base64, DiscordFetch } from "lib/functions";
import { NextApiRequest, NextApiResponse } from "next";

const Verify = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code, state } = req.query as Record<string, string>;

  let fetchedData = await DiscordFetch.secret("authorization_code", code);

  if (fetchedData == undefined) res.redirect(process.env.redirect_uri_lapis);

  
};

export default Verify;
