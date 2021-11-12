import React from "react";
import { useRouter } from "next/router";

// Components
import UserSearch from "../components/User/UserSearch";
import UserCardList from "../components/User/UserCardList";

const Search = () => {
  const { query } = useRouter();
  const { q: urlQuery } = query;

  return (
    <div className="flex gap-4">
      <div className="w-72"></div>
      <div className="flex-1">
        <div className="mb-2">
          <UserSearch block />
        </div>
        {urlQuery && (
          <div className="mb-6">Showing results for "{urlQuery}"</div>
        )}
        <UserCardList query={urlQuery as string} />
      </div>
    </div>
  );
};

export default Search;
