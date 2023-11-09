import { initializeApp } from "firebase-admin/app";
import { defineSecret } from "firebase-functions/params";

export const app = initializeApp();

const devCallback = import.meta.env.VITE_CALLBACK_URL;
const devCallbackValue = {
  value: () => devCallback,
};

export const DISCORD_CLIENT_ID = defineSecret("DISCORD_CLIENT_ID");
export const DISCORD_CLIENT_SECRET = defineSecret("DISCORD_CLIENT_SECRET");
export const DISCORD_CALLBACK_URL = devCallback
  ? devCallbackValue
  : defineSecret("DISCORD_CALLBACK_URL");
