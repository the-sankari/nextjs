import React, { cache } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostsPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    { cache: "force-cache" }
  );
  const posts: Post[] = await res.json();

  return (
    <div className="p-8 md:p-12 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold">Posts</h1>
      <p className="mt-3 text-gray-600">
        A selection of example posts fetched from JSONPlaceholder.
      </p>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
          >
            <header className="mb-3">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h2>
            </header>

            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4">
              {post.body}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">Post #{post.id}</span>
              <a
                className="text-sm text-indigo-600 hover:underline"
                href={`https://jsonplaceholder.typicode.com/posts/${post.id}`}
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
