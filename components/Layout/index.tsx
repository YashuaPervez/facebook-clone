import React, { Dispatch, SetStateAction } from "react";
// import { useAppDispatch } from "../../utils/hooks/redux-store";
// import { login } from "../../store/slices/userSlice";
// import { loadPosts } from "../../store/slices/postSlice";

// Components
import Navbar from "./Navbar";
// import Footer from "./Footer";
import Container from "../UI/Container";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 mt-8">
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
