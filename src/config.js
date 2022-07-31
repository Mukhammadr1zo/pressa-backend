import { config } from "dotenv";
config()


const SECRET = process.env.JWT_SECRET;

const Configs = {
  user: process.env.PG_USER,
  port: process.env.PG_PORT,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_NAME,
};

export default { Configs, SECRET };

