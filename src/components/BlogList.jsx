import React from 'react';
export default function BlogList({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <article key={post.slug} className="border p-4 rounded-lg">
          {post.featuredImage && (
            <img
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          )}
          <h2 className="text-xl font-bold mt-2">{post.title}</h2>
          <p className="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
        </article>
      ))}
    </div>
  );
}