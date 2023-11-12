import { Handler } from "express";
import passport from "passport";
import { Strategy } from "passport-discord";
import logger from "firebase-functions/logger";
import "../app";
import {
  DISCORD_CALLBACK_URL,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  auth,
} from "../app";
import { trackUser } from "../store/user";
import { omit, pick } from "lodash";
import { trackGuilds } from "../store/guilds";

const scopes = ["identify", "email", "guilds", "guilds.join"];
try {
  passport.use(
    new Strategy(
      {
        clientID: DISCORD_CLIENT_ID.value(),
        clientSecret: DISCORD_CLIENT_SECRET.value(),
        callbackURL: DISCORD_CALLBACK_URL.value(),
        scope: scopes,
      },
      async function (accessToken, refreshToken, profile, done) {
        const { id: discordId, username, discriminator } = profile;

        try {
          logger.info(`Tracking user: ${username}#${discriminator}`);

          await trackUser({
            id: discordId,
            ...omit(profile, ["id", "guilds"]),
          });

          await trackGuilds(pick(profile, ["guilds"]).guilds ?? []);

          // Set session cookie with Firebase
          const additionalClaims = {
            discordId,
            accessToken,
            refreshToken,
          };

          const firebaseToken = await auth.createCustomToken(
            discordId,
            additionalClaims
          );

          done(null, { profile, firebaseToken });
        } catch (err) {
          logger.error(err);
          done(err as Error);
        }
      }
    )
  );
} catch (err) {
  //
}

passport.serializeUser(function (user, done) {
  logger.info("Serializing User");
  done(null, user);
});

passport.deserializeUser<any>(function (user, done) {
  logger.info("Deserializing User");
  done(null, user);
});

export default passport;
