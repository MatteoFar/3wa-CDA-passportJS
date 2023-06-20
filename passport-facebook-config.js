import passport from 'passport';
import FacebookStrategy from "passport-facebook"

export default function initializePassportFacebook() {

      passport.use(new FacebookStrategy({
        clientID: process.env.clientIDFACEBOOK,
        clientSecret: process.env.clientSecretFACEBOOK,
        callbackURL: process.env.callbackURLFACEBOOK
      },
      function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
      }
      ));

      passport.serializeUser(function(user, done) {
        done(null, user);
      });passport.deserializeUser(function(user, done) {
        done(null, user);
      });
}
