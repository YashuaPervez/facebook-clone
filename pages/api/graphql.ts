import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { applyMiddleware } from "graphql-middleware";
import schema from "../../graphql/schema";
import createContext from "../../graphql/context";
import middlewares from "../../graphql/middlewares";

const apolloServer = new ApolloServer({
  schema,
  // schema: applyMiddleware(schema, middlewares),
  context: createContext,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
const startServer = apolloServer.start();

export default async function (req: any, res: any) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
