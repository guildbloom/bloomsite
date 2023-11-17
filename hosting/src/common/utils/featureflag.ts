export const featureFlags = {
  main: location.host.match(/^guildbloom.com/g),
  beta: location.host.match(/^beta.guildbloom.com/g),
};
