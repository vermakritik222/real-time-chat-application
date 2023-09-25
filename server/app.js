import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/Routes.js';

const app = express();

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', Routes);


export default app