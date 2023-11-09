import Express from "express";
import passport from "passport";
import { Strategy } from "passport-discord";

const scopes = ["identify", "email", "guilds", "guilds.join"];

console.log({ env: import.meta.env });

passport.use(
  new Strategy(
    {
      clientID: import.meta.env.FUNC_DISCORD_CLIENT_ID,
      clientSecret: import.meta.env.FUNC_DISCORD_CLIENT_SECRET,
      callbackURL: import.meta.env.FUNC_DISCORD_CALLBACK_URL,
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

export default passport;
