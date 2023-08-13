import type { InferGetStaticPropsType, GetStaticProps } from "next";
type Repo = {
  data: any;
};
import React, { ReactNode } from "react";
import QuestionItem from "@/components/QuestionItem";

interface props {
  children: ReactNode;
}

export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/questions");
  const repo = await res.json();
  return { props: { repo } };
};

export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(repo);
  return (
    <div className="mt-10 mx-auto w-5/6 md:w-1/2">
      {repo.data.map((repo) => (
        <QuestionItem
          key={repo.id}
          question={repo.attributes.title}
          answer={repo.attributes.answer}
        />
      ))}
    </div>
  );
}
