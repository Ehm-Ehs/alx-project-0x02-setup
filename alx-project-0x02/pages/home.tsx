import React from "react";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home = () => {
  return (
    <div className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <Card title="Welcome" content="This is the home page of the project." />
      <Card
        title="About"
        content="This project is built with Next.js and TypeScript."
      />
      <Card
        title="Features"
        content="Reusable components make development faster and cleaner."
      />
    </div>
  );
};

export default Home;
