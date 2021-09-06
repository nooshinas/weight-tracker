import { GraphQLInt, GraphQLList } from "graphql";
import {IWeight, WeightType} from "../typeDefs/Weight";
import { Weight } from "../../entities/Weight";
import { User } from "../../entities/User";

export const GET_ALL_WEIGHTS = {
  type: new GraphQLList(WeightType),
  args: {
    userId: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any): Promise<IWeight[] >{
    const user = await User.findOne(args.id);

    if (!user) {
      throw new Error(`The user with id: ${args.userId} does not exist!`);
    }

    return await Weight.find({ where: { user: { id: args.userId } } });
  },
};
