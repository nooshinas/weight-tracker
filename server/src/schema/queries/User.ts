import { GraphQLInt } from "graphql";
import { UserType, IUser } from "../typeDefs/User";
import { User } from "../../entities/User";

export const GET_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any): Promise<IUser> {
    const users = await User.find();

    // TODO: should not add user in this way (create sigh up user or seed data to database instead)
    if (users && users.length == 0) {
      const firstUser = User.create({
        firstName: "Nooshin",
        lastName: "Asadeh",
      });
      await firstUser.save();
    }

    const user = await User.findOne(args.id);

    if (!user) {
      throw new Error(`The user with id: ${args.id} does not exist!`);
    }

    return user;
  },
};
