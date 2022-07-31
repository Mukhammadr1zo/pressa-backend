import { config } from "dotenv";
config();
import express from "express";
import cors from 'cors'
import path from "path";
import module from './modules/index.js'
import authorization from "./middlewares/authorization.js";
import errorHandling from "./middlewares/errorHandling.js"

const server = express();

server.use(express.json());
server.use(express.static(path.join(process.cwd(), "upload")));
server.use(cors());

server.use(authorization);
server.use('/', module)

// Error processing
server.use(errorHandling);

server.listen(process.env.PORT || 5000, () =>
  console.log(`*${process.env.PORT}`)
);


