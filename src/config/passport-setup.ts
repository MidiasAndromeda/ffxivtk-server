import * as passport from 'passport';
import * as googleStrategy from 'passport-google-oauth20';
import { User } from './../models/User.model';
import { UserService } from '../services/User.service';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user);
        });
});

passport.use(new googleStrategy({
    callbackURL: '/api/auth/google/redirect',
    clientID: process.env.GOOGLE_API_KEY,
    clientSecret: process.env.GOOGLE_API_SECRET,
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then((currentUser) => {
            if (currentUser) {
                done(null, currentUser);
            } else {
                new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    avatar: profile._json.image
                })
                    .save()
                    .then((newUser) => {
                        done(null, newUser);
                    });
            }
        });
}));