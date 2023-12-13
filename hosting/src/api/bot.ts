import { doGet } from "./_fetch";

export const botPing = () =>
  doGet<string>("/bot/api/ping", {
    headers: {
      Accept: "text/plain",
    },
  });
