import { objectType } from "nexus";

export const Profile = objectType({
  name: "Profile",
  definition(t) {
    t.nonNull.string("displayName");
    t.nullable.string("about");
    t.nullable.string("imageURL");
    t.nullable.string("interests");
    t.nullable.string("coverImageURL");
    t.nullable.string("workPlace");
    t.nullable.string("location");
  },
});
