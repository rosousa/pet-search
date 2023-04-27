import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { logger } from './logger';
import { router } from './routes';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(router);

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(process.env.PORT || 3000, () =>
  logger.info(`Server is running on port: ${port}`)
);
