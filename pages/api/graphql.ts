import { ApolloServer } from "apollo-server-micro";
import schema from "../../graphql/schema";
import createContext from "../../graphql/context";

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
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
