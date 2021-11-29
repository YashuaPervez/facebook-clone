import React from "react";
import { useRouter } from "next/router";

// Components
import BodyLayout from "../components/BodyLayout";
import UserSearch from "../components/User/UserSearch";
import UserCardList from "../components/User/UserCardList";

const Search = () => {
  const { query } = useRouter();
  const { q: urlQuery } = query;

  return (
    <BodyLayout leftSide={<div></div>} rightSide={null} removePannelButtons>
      <div className="mb-2">
        <UserSearch block />
      </div>
      {urlQuery && (
        <div className="mb-6">Showing results for {`"${urlQuery}"`}</div>
      )}
      <UserCardList query={urlQuery as string} />
    </BodyLayout>
  );
};

export default Search;
