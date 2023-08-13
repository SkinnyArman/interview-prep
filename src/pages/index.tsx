import React, { ReactNode } from "react";
import QuestionItem from "@/components/QuestionItem";

interface props {
  children: ReactNode;
}

const Home: React.FC<props> = (props) => {
  return (
    <div className="mt-10 mx-auto w-1/2">
      <QuestionItem question="how old are you" answer="21" />
    </div>
  );
};

export default Home;
