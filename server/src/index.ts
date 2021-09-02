import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import { createConnection } from "typeorm";
import dotenv from "dotenv";

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
      schema: new GraphQLSchema({}),
      graphiql: true,
    })
  );

  const PORT = process.env.PORT || 4000;
  app.listen(4000, () => console.log(`Server is running on port ${PORT}`));
};

main().catch((err) => console.log(err));
