import { objectType } from "nexus";

export const Profile = objectType({
  name: "Profile",
  definition(t) {
    t.nonNull.string("displayName");
    t.nullable.string("about");
    t.nullable.string("imageURL");
  },
});
