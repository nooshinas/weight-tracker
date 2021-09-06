import { IWeight, WeightType } from "../typeDefs/Weight";
import { GraphQLFloat, GraphQLInt, GraphQLString } from "graphql";
import { Weight } from "../../entities/Weight";
import { User } from "../../entities/User";

export const CREATE_WEIGHT = {
  type: WeightType,
  args: {
    userId: { type: GraphQLInt },
    weight: { type: GraphQLFloat },
    measurement: { type: GraphQLString },
    date: { type: GraphQLString },
  },
  async resolve(parent: any, args: any): Promise<IWeight> {
    const user = await User.findOne(args.userId);

    if (!user) {
      throw new Error(`The user with id: ${args.userId} does not exist!`);
    }

    const weight = Weight.create({
      weight: args.weight,
      measurement: args.measurement,
      date: args.date,
      user: { id: args.userId },
    });
    await weight.save();
    return weight;
  },
};

export const UPDATE_WEIGHT = {
  type: WeightType,
  args: {
    id: { type: GraphQLInt },
    userId: { type: GraphQLInt },
    weight: { type: GraphQLFloat },
    measurement: { type: GraphQLString },
    date: { type: GraphQLString },
  },
  async resolve(parent: any, args: any): Promise<IWeight> {
    const weight = await Weight.findOne({
      id: args.id,
      user: { id: args.userId },
    });

    if (!weight) {
      throw new Error(
        `The weight measurement with id: ${args.id} does not exist!`
      );
    }
    Object.assign(weight, args);
    await weight.save();

    return weight;
  },
};

export const DELETE_WEIGHT = {
  type: WeightType,
  args: {
    userId: { type: GraphQLInt },
    id: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any): Promise<boolean> {
    const weight = await Weight.findOne({
      where: { id: args.id, user: { id: args.userId } },
    });

    if (!weight) {
      throw new Error(
        `The weight measurement  with id: ${args.id} does not exist!`
      );
    }

    await weight.remove();
    return true;
  },
};
