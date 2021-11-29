// Components
import Navbar from "./Navbar";
import Container from "../UI/Container";
import Notifications from "../UI/Notifications";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Notifications />
      <Navbar />
      <main className="flex-1 my-8">
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
