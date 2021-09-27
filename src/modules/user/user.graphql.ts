import { gql } from 'apollo-server-core';
import { IResolvers } from '@graphql-tools/utils';
import { UserService } from '.';

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
      const user = await UserService.findOne(id);
      return user;
    },
  },
  Mutation: {},
};
