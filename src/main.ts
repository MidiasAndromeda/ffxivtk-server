require('dotenv').config();
import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as cookieSession from 'cookie-session';
import * as passport from 'passport';
const passportSetup = require('./config/passport-setup');

// Init
const app = express();

// Config
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // 1 day
  keys: [process.env.SESSION_COOKIE_KEY]
}))
app.use(passport.initialize());
app.use(passport.session());

// Routers
import { AuthenticationRouter } from './routers/Auth.router';
import { UserRouter } from './routers/User.router';

// Routes
app.use(process.env.API_ROUTE + '/auth', new AuthenticationRouter().getRouter());
app.use(process.env.API_ROUTE + '/user', new UserRouter().getRouter());

// Start
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log('Connection with the MongoDB database successfully estabilshed.');
});

app.get('/', (request, response) => {
  response.send('Server is running');
});
app.listen(process.env.API_PORT);