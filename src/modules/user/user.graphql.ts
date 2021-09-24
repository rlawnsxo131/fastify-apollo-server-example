import { gql } from 'apollo-server-core';
import { IResolvers } from '@graphql-tools/utils';
import { userService } from '.';

export const typeDef = gql`
  type User {
    id: Int!
    name: String!
  }
  extend type Query {
    user(id: Int!): User
  }
`;

export const resolvers: IResolvers = {
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
