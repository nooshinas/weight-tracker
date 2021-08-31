import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";

const main = async () => {
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
