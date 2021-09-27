import { IResolvers } from '@graphql-tools/utils';
import { gql } from 'apollo-server-core';
import { DataService } from '.';

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
    data: async (parent, args) => {
      const { id } = args;
      const data = await DataService.findOne(id);
      return data;
    },
  },
};
