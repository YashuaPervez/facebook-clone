import { makeSchema } from "nexus";
import { join } from "path";

import * as types from "./types";

const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), "graphql", "generated", "nexus-typegen.ts"),
    schema: join(process.cwd(), "graphql", "generated", "schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "graphql", "context.ts"),
  },
});

export default schema;
