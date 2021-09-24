import { gql } from 'apollo-server-core';
import { IResolvers } from '@graphql-tools/utils';
import { userService } from '.';

const typeDef = gql`
  type User {
    id: Int!
    name: String!
  }
  extend type Query {
    user(id: Int!): User
  }
`;

const resolvers: IResolvers = {
  User: {},
  Query: {
    user: async (parent, args, context, info) => {
      const { id } = args;
      const user = await userService.findById(id);
      return user;
    },
  },
  Mutation: {},
};

const userGraphql = {
  typeDef,
  resolvers,
};

export default userGraphql;
