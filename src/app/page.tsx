import Navbar from "@/components/Navbar";
import QuestionItem from "@/components/QuestionItem";
import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Home: React.FC<props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className="mt-5 w-1/2 mx-auto">
        <QuestionItem
          question={"How old are ya?"}
          answer={"None of ur business"}
        />
      </div>
    </>
  );
};

export default Home;
