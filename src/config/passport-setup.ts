import * as passport from 'passport';
import * as googleStrategy from 'passport-google-oauth20';
import { Users } from './../models/User.model';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users.findById(id)
        .then((user) => {
            done(null, user);
        });
});

passport.use(new googleStrategy({
    callbackURL: '/api/auth/google/redirect',
    clientID: process.env.GOOGLE_API_KEY,
    clientSecret: process.env.GOOGLE_API_SECRET,
}, (accessToken, refreshToken, profile, done) => {
    Users.findOne({ googleId: profile.id })
        .then((currentUser) => {
            if (currentUser) {
                done(null, currentUser);
            } else {
                new Users({
                    username: profile.displayName,
                    googleId: profile.id,
                })
                    .save()
                    .then((newUser) => {
                        done(null, newUser);
                    });
            }
        });
}));
