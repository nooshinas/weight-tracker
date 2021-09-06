import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  }),
});
