import { Resolvers } from '../types/graphqlTypesGenerated';
import {
  addQuackResolver,
  deleteQuackResolver,
  quacksResolver,
  usersQuacks,
} from './modules/quack/quackResolver';
import {
  quackUser,
  signInResolver,
  signUpResolver,
  userResolver,
  usersResolver,
} from './modules/user/userResolver';

const resolvers: Resolvers = {
  Query: {
    quacks: quacksResolver,
    user: userResolver,
    users: usersResolver,
  },
  Mutation: {
    addQuack: addQuackResolver,
    deleteQuack: deleteQuackResolver,
    signIn: signInResolver,
    signUp: signUpResolver,
  },
  Quack: {
    user: quackUser,
  },
  User: {
    quacks: usersQuacks,
  },
};

export default resolvers;
