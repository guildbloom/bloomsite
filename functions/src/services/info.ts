import axios from "axios";
import { DISCORD_BOT_TOKEN } from "../app";

const instance = axios.create({
  baseURL: "https://discord.com/api/v10",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bot ${DISCORD_BOT_TOKEN.value()}`,
  },
});
