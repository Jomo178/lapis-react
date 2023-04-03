import { Schema, models, model, Model } from "mongoose";

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

const websiteSchema = new Schema<WebsiteInterface>({
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

const Website: Model<WebsiteInterface> =
  models.website || model("website", websiteSchema);

export default Website;
