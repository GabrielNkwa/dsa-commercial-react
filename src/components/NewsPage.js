import React from 'react';
import client from '../client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Layout/Navbar';

export default function NewsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }

      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-center md:text-6xl lg:text-8xl">
          DSA NEWS
        </h1>

        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 ">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                
              />
              <h4 className="text-xl mt-2">{post.title}</h4>
              <button className="mt-5 mb-10">
                <Link
                  to={`/news/${post.slug.current}`}
                  className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold mb-5"
                >
                  Read more
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
