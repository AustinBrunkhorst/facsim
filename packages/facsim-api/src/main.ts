import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';

import bootstrapServer from './bootstrap';

let activeServer: ApolloServer;

bootstrapServer().then(server => {
  activeServer = server;

  console.log('bootstrap service');

  return server.listen();
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => activeServer && activeServer.stop());
}
