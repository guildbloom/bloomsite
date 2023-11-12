export enum AvatarType {
  "guild" = "icon",
  "user" = "avatars",
  "banners" = "banners",
}

export const getAvatarURL = (type: AvatarType, id: string, avatarId: string) =>
  `https://cdn.discordapp.com/${type}/${id}/${avatarId}.png`;
