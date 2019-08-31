require('dotenv').config();
import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
const passportSetup = require('./config/passport-setup');
// Init
const app = express();

// Config
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routers
import { AuthenticationRouter } from './routers/Auth.router';

// Routes
app.use(process.env.API_ROUTE + '/auth', new AuthenticationRouter().getRouter());

// Start
app.get('/', (request, response) => {
  response.send('Server is running');
});
app.listen(process.env.API_PORT);