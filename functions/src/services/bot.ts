import axios from "axios";
import { DISCORD_BOT_TOKEN } from "../app";
import { logger } from "firebase-functions/v1";

let Authorization = ``;

try {
  Authorization = `Bot ${DISCORD_BOT_TOKEN.value()}`;
} catch (err) {
  //
}

const instance = axios.create({
  baseURL: "https://discord.com/api/v10",
  headers: {
    "Content-Type": "application/json",
    Authorization,
  },
});

export const sendDM = (recipient_id: string, content: string) =>
  instance
    .post("/users/@me/channels", { recipient_id })
    .then(({ data }) => {
      return instance
        .post(`/channels/${data.id}/messages`, {
          content,
        })
        .then(() => true)
        .catch((err) => {
          logger.error("Cannot send DM to channel", err?.response?.data);
          return false;
        });
    })
    .catch(() => {
      logger.error("Cannot create DM channel");
      return false;
    });
