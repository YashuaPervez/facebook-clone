import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

// Components
import UserCardItem from "./item";
import LoaderBlock from "../../UI/Loader/LoaderBlock";

//
import { searchUsersQuery } from "../../../utils/queries/userQueries";
import { User } from "../../../typeDefs";

type UserCardListProps = {
  query: string;
};

const UserCardList: React.FC<UserCardListProps> = ({ query }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [moreAvailable, setMoreAvailable] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moreLoading, setMoreLoading] = useState<boolean>(false);

  const [searchUsers, { loading, data, error }] = useLazyQuery(
    searchUsersQuery,
    {
      fetchPolicy: "network-only",
    }
  );

  const onSearchUsers = async (): Promise<void> => {
    if (!query || query.length < 3) return;
    try {
      searchUsers({
        variables: {
          pageNo: 1,
          query,
        },
      });
      setCurrentPage(1);
      setUsers([]);
    } catch (e) {
      console.log("error >>", e);
    }
  };

  const showMoreResultsHandler = async () => {
    try {
      setMoreLoading(true);
      searchUsers({
        variables: {
          pageNo: currentPage,
          query,
        },
      });
    } catch (e) {}
  };

  useEffect(() => {
    onSearchUsers();
  }, [query]);

  useEffect(() => {
    if (!loading && data && !error) {
      const newUsers = data.searchUsers.users as User[];
      const newMoreAvailable = data.searchUsers.moreAvailable as boolean;

      setMoreLoading(false);
      setMoreAvailable(newMoreAvailable);
      setUsers((prev) => [...prev, ...newUsers]);
      setCurrentPage((prev) => prev + 1);
    }
  }, [loading, data, error]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user: User) => <UserCardItem user={user} key={user.id} />)
      )}
      {moreAvailable && (
        <button className="text-primary-main" onClick={showMoreResultsHandler}>
          Show more results
        </button>
      )}
      {moreLoading && <LoaderBlock />}
    </div>
  );
};

export default UserCardList;
