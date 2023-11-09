import passport from "passport";
import { Strategy } from "passport-discord";

import {
  DISCORD_CALLBACK_URL,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
} from "./config";

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
      function (accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ discordId: profile.id }, function(err, user) {
        //     return cb(err, user);
        // });
        console.log({ accessToken, refreshToken, profile });

        done(null, profile);
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser<any>(function (user, done) {
    done(null, user);
  });
} catch (err) {
  //
}

export default passport;
