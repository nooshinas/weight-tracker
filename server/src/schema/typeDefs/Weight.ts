import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export interface IWeight {
  id: number;
  weight: number;
  measurement: string;
  date: Date;
}

export const WeightType = new GraphQLObjectType({
  name: "Weight",
  fields: () => ({
    id: { type: GraphQLInt },
    weight: { type: GraphQLFloat },
    measurement: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});
