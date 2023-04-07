import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { logger } from './logger';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(process.env.PORT || 3000, () =>
  logger.info(`Server is running on port: ${port}`)
);
