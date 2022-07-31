import { config } from "dotenv";
config();
import express from "express";
import cors from 'cors'
import path from "path";
import module from './modules/index.js'
import authorization from "./middlewares/authorization.js";
import errorHandling from "./middlewares/errorHandling.js"
const port = process.env.PORT
const app = express();

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "upload")));
app.use(cors());

app.use(authorization);
app.use('/', module)

// Error processing
app.use(errorHandling);

app.listen(port || 5000, () =>
  console.log(`*${port}`)
);


