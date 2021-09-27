import { gql } from 'apollo-server-core';
import { makeExecutableSchema } from '@graphql-tools/schema';
import merge from 'lodash.merge';
import { userGraphql } from '../modules/user';
import { dataGraphql } from '../modules/data';

const typeDef = gql`
  scalar Date
  type Query {
    _version: String
  }
  type Mutation {
    _empty: String
  }
`;

const resolvers = {
  Query: {
    _version: () => '1.0',
  },
  Mutation: {},
};

const schema = makeExecutableSchema({
  typeDefs: [typeDef, userGraphql.typeDef, dataGraphql.typeDef],
  resolvers: merge(resolvers, userGraphql.resolvers, dataGraphql.resolvers),
});

export default schema;
