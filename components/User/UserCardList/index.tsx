import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

// Components
import UserCardItem from "./item";

//
import { searchUsersQuery } from "../../../utils/queries/userQueries";

type UserCardListProps = {
  query: string;
};

const UserCardList: React.FC<UserCardListProps> = ({ query }) => {
  const [users, setUsers] = useState<any>([]);
  const [searchUsers, { loading, data, error }] =
    useLazyQuery(searchUsersQuery);

  const onSearchUsers = async (): Promise<void> => {
    if (!query || query.length < 3) return;
    try {
      searchUsers({
        variables: {
          pageNo: 1,
          query,
        },
      });
    } catch (e) {
      console.log("error >>", e);
    }
  };

  useEffect(() => {
    onSearchUsers();
  }, [query]);

  useEffect(() => {
    if (data && !error) {
      setUsers(data.searchUsers);
    } else {
      console.log("error >>", error);
    }
  }, [data, error]);

  return (
    <div>
      {users.map((user: any) => (
        <UserCardItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserCardList;
