import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_WEIGHTS } from "./queries/Weight";
import {
  CREATE_WEIGHT,
  UPDATE_WEIGHT,
  DELETE_WEIGHT,
} from "./mutations/Weight";
import { GET_USER } from "./queries/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllWeights: GET_ALL_WEIGHTS,
    getUser: GET_USER,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createWeight: CREATE_WEIGHT,
    updateWeight: UPDATE_WEIGHT,
    deleteWeight: DELETE_WEIGHT,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
