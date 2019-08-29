import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as passport from 'passport-local';

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
app.use('/api/auth', new AuthenticationRouter.getRouter());

// Start
app.get('/', (request, response) => {
  response.send('Server is running');
});
app.listen(5000);