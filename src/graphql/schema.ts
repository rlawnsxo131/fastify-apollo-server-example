import { gql } from 'apollo-server-fastify';
import { makeExecutableSchema } from '@graphql-tools/schema';
import merge from 'lodash.merge';
import * as user from './user';

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
  typeDefs: [typeDef, user.typeDef],
  resolvers: merge(resolvers, user.resolvers),
});

export default schema;
