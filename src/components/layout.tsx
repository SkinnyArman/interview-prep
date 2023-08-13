import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Layout: React.FC<props> = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
