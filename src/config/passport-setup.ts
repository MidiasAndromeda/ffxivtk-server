import * as passport from 'passport';
import * as googleStrategy from 'passport-google-oauth20';

passport.use(new googleStrategy({
    callbackURL: '/api/auth/google/redirect',
    clientID: process.env.GOOGLE_API_KEY,
    clientSecret: process.env.GOOGLE_API_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
    })
);