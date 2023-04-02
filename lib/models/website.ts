import mongoose from "mongoose";

interface WebsiteInterface {
  userID: string;
  type: string;
  allowed: boolean;
  access_token: string;
  refresh_token: string;
  email: string;
  expires_in: number;
  token: string;
  code: string;
}

const Schema = new mongoose.Schema<WebsiteInterface>({
  userID: String,
  type: String,
  allowed: Boolean,
  access_token: String,
  refresh_token: String,
  expires_in: Number,
  email: String,
  token: String,
  code: String,
});

export default mongoose.models.website || mongoose.model("website", Schema);
