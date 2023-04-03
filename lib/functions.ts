import { Website } from "@models";
import axios from "axios";
import { AccessTokenResponse, UsersDiscordInfo } from "./types";

export class DiscordFetch {
  static async secret(
    type: "refresh_token" | "authorization_code",
    token: string
  ) {
    const data = {
      client_id: process.env.client_id,
      client_secret: process.env.client_secret,
      grant_type: type,
      ...(type === "authorization_code" && {
        code: token,
        redirect_uri: process.env.redirect_uri_lapis,
      }),
      ...(type === "refresh_token" && { refresh_token: token }),
    };

    try {
      const response = await axios.post<AccessTokenResponse>(
        `${process.env.api_endpoint}/oauth2/token`,
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data as AccessTokenResponse;
    } catch (error) {
      console.error(error);
      return;
    }
  }

  static async user(
    author: string = "Bot",
    token: string,
    id: boolean = false
  ) {
    try {
      const response = await axios.get<UsersDiscordInfo>(
        `${process.env.api_endpoint}/users/${id ? token : "@me"}`,
        {
          headers: {
            authorization: `${author} ${
              author == "Bot" ? process.env.bot_token : token
            }`,
          },
        }
      );

      return response.data as UsersDiscordInfo;
    } catch (error) {
      console.error(error);
      return;
    }
  }
}

export class Base64 {
  static encode(string: string) {
    return btoa(
      encodeURIComponent(string).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode(("0x" + p1) as any);
      })
    );
  }

  static decode(string: string) {
    return decodeURIComponent(
      atob(string)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  }
}

export class create {
  static async website(
    userID: string,
    type: string,
    allowed: boolean,
    access_token: string,
    refresh_token: string,
    expires_in: number,
    email: string,
    token: string,
    code: string
  ) {
    return await Website.create({
      userID,
      type,
      allowed,
      access_token,
      refresh_token,
      expires_in,
      email,
      token,
      code,
    });
  }
}

export function getTokenCookieParams(token: string) {
  const splitString = token.split(".");
  const decodedValues = splitString.map(Base64.decode);

  const obj = {
    id: decodedValues[0],
    time: decodedValues[1],
    code: decodedValues[2],
  };

  return obj;
}
