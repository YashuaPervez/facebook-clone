import React from "react";
import Link from "next/link";
import { useAppSelector } from "../../../utils/hooks/redux-store";

// Components
import Container from "../../UI/Container";
import Avatar from "../../UI/Avatar";
import UserSearch from "../../User/UserSearch";
import IconButton from "../../UI/IconButton";

//
import { More } from "../../icons";
import { text } from "stream/consumers";

const Navbar = () => {
  const user = useAppSelector((state) => state?.user?.user);
  const isLoggedIn = useAppSelector((state) => state?.user?.isLoggedIn);

  return (
    <div className="bg-blue-400 shadow-md">
      <Container>
        <div className="h-16 flex items-center">
          <Link href="/">
            <a>
              <h1 className="text-2xl text-white font-semibold">Facebook</h1>
            </a>
          </Link>
          <div className="ml-6">
            <UserSearch />
          </div>
          <div className="flex-1" />
          {isLoggedIn && (
            <>
              <Link href={`/user/${user?.username}`}>
                <a className="flex items-center">
                  <Avatar src={user?.profile?.imageURL} />
                  <span className="block ml-2 text-white font-semibold">
                    {user?.profile?.displayName}
                  </span>
                </a>
              </Link>
              <div className="ml-4">
                <IconButton
                  color="white"
                  size="sm"
                  menu={[
                    {
                      link: "/profile",
                      text: "Profile",
                    },
                    {
                      link: "#",
                      text: "Logout",
                      onClick: () => {
                        console.log("aaaa Logout");
                      },
                    },
                  ]}
                >
                  <More size={5} />
                </IconButton>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
