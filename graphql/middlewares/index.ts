import { rule, shield } from "graphql-shield";
import { Context } from "../context";

const rules = {
  isAuthenticatedUser: rule()((_parent, _args, ctx: Context) => {
    return !!ctx.user.userId && ctx.user.isLoggedIn;
  }),
};

const middlewares = shield({
  Mutation: {
    createPost: rules.isAuthenticatedUser,
  },
});

export default middlewares;
