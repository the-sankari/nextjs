import React from "react";
import page from "../page";

const DashboardPage = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">
        This is the dashboard page of your Next.js application.
      </p>
      <p>
        Go to <a href="/profile">Profile</a> or <a href="/posts">Posts</a>
      </p>
    </div>
  );
};

export default DashboardPage;
