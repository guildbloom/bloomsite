import { doPost } from "./_fetch";

export const addToWaitlist = (discordId: string) =>
  doPost<boolean>("/api/waitlist/add", { discordId });
