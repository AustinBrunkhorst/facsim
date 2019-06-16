import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { environment } from './environment';
import resolvers from './resolvers';

export default async function bootstrapServer() {
  console.log('start server bootstrap');

  const schema = await buildSchema({
    resolvers
  });

  const { introspection, playground } = environment.apollo;

  return new ApolloServer({
    schema,
    introspection,
    playground
  });
}