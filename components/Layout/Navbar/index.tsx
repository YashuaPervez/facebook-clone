import React, { useState } from "react";
import Link from "next/link";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../utils/hooks/redux-store";
import { useRouter } from "next/router";

// Components
import Container from "../../UI/Container";
import Avatar from "../../UI/Avatar";
import UserSearch from "../../User/UserSearch";
import IconButton from "../../UI/IconButton";

//
import { More, Search } from "../../icons";
import { logout } from "../../../store/slices/userSlice";

const Navbar = () => {
  const user = useAppSelector((state) => state?.user?.user);
  const isLoggedIn = useAppSelector((state) => state?.user?.isLoggedIn);

  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const onOpenMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSearchOpen(false);
  };

  return (
    <div className="bg-blue-400 shadow-md relative">
      <Container>
        <div className="h-16 flex items-center ">
          <Link href="/">
            <a>
              <h1 className="text-2xl text-white font-semibold">Facebook</h1>
            </a>
          </Link>
          <div className="ml-3 lg:hidden">
            <IconButton
              size="sm"
              color="white"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <Search size={4.6} color="blue" />
            </IconButton>
          </div>
          <div
            className={`p-2 absolute top-16 left-0 z-40 w-full bg-white shadow-lg ${
              searchOpen ? "block" : "hidden"
            } lg:p-0 lg:static lg:ml-6 lg:z-0 lg:w-min lg:bg-transparent lg:shadow-none`}
          >
            <UserSearch />
          </div>
          <div className="flex-1 bg-red-300" />
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
                  onClick={onOpenMenu}
                  menu={[
                    {
                      link: "/profile",
                      text: "Profile",
                    },
                    {
                      link: "#",
                      text: "Logout",
                      onClick: () => {
                        dispatch(logout({}));
                        push("/login");
                      },
                    },
                  ]}
                >
                  <More size={4.6} />
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
