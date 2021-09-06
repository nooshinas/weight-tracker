import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { createConnection } from "typeorm";
import dotenv from "dotenv";
import { schema } from "./schema";
import { User } from "./entities/User";
import { Weight } from "./entities/Weight";

const main = async () => {
  dotenv.config();

  await createConnection({
    type: "mysql",
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306 || process.env.DB_PORT,
    database: process.env.DB_NAME,
    logging: true,
    synchronize: false,
    entities: [],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  const PORT = process.env.NODE_PORT || 4001;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

main().catch((err) => console.log(err));
