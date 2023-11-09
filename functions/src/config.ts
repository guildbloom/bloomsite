import { initializeApp } from "firebase-admin/app";
import { defineSecret } from "firebase-functions/params";

export const app = initializeApp();

export const DISCORD_CLIENT_ID = defineSecret("DISCORD_CLIENT_ID");
export const DISCORD_CLIENT_SECRET = defineSecret("DISCORD_CLIENT_SECRET");
export const DISCORD_CALLBACK_URL = defineSecret("DISCORD_CALLBACK_URL");
