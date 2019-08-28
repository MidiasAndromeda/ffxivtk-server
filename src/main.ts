import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

// APP INIT
const app = express();

// Cors
app.use(cors());
// Logger
app.use(morgan('dev'));
//Json Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routers
const UsersRouter = express.Router();

//Users Routes
UsersRouter.route('/')
  .get(async (req, res) => {
    res.json("yes")
  });

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.use('/api/' + 'users', UsersRouter);
app.listen(5000);