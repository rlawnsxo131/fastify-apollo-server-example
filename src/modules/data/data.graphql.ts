import { IResolvers } from '@graphql-tools/utils';
import { gql } from 'apollo-server-core';
import { dataService } from '.';

export const typeDef = gql`
  type Data {
    id: Int!
    data: [Int]
  }
  extend type Query {
    data(id: Int!): Data
  }
`;

export const resolvers: IResolvers = {
  Query: {
    data: async (parent, args, context) => {
      const { id } = args;
      const data = await dataService.findById(id);
      return data;
    },
  },
};
