import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//
import { Search } from "../../icons";

type UserSearchProps = {
  block?: boolean;
};

const UserSearch: React.FC<UserSearchProps> = ({ block = false }) => {
  const { push, query } = useRouter();
  const [search, setSearch] = useState("");

  const { q: urlQuery } = query;

  const onSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      push(`/search?q=${search}`);
    }
  };

  useEffect(() => {
    if (urlQuery && typeof urlQuery === "string") {
      setSearch(urlQuery);
    }
  }, [urlQuery]);

  return (
    <form onSubmit={onSearchHandler}>
      <div className="h-10 border border-blue-400 flex items-strech rounded-full overflow-hidden">
        <input
          className={`outline-none px-4 text-sm ${
            block ? "flex-1" : "w-36 focus:w-60 transition-all"
          }`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="w-12 bg-white flex items-center justify-center">
          <Search size={5.2} color="#60A5FA" />
        </button>
      </div>
    </form>
  );
};

export default UserSearch;
