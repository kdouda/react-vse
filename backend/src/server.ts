import { type Connection } from 'mariadb';
import { ApolloServer } from '@apollo/server';
import {
  startStandaloneServer,
  StandaloneServerContextFunctionArgument,
} from '@apollo/server/standalone';

import schemaDefinition from './graphql/rootTypeDefs';
import rootResolver from './graphql/rootResolver';
import { getConnection } from './libs/dbConnection';
import { CustomContext } from './types/types';
import { MOCKS, PORT } from './config';
import mockResolvers from '../mocks/mockResolvers';

const init = async () => {
  const server = new ApolloServer({
    typeDefs: [schemaDefinition],
    resolvers: MOCKS ? mockResolvers : rootResolver,
  });

  const customContext = async ({
    req,
  }: StandaloneServerContextFunctionArgument): Promise<CustomContext> => {
    const auth = req.headers.Authorization || '';

    return {
      dbConnection: MOCKS ? (null as any as Connection) : await getConnection(),
      auth,
    };
  };

  const { url } = await startStandaloneServer(server, {
    listen: {
      port: PORT,
    },
    context: customContext,
  });

  console.log('Server listening at: ' + url);
};

init();
