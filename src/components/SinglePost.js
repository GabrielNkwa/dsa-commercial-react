import React from 'react';
import Navbar from '../Layout/Navbar';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import client from '../client';
import SanityBlockContent from '@sanity/block-content-to-react';

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(
    () => () => {
      client
        .fetch(
          `*[slug.current == "${slug}"]{
        title, 
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
        .then((data) => setSinglePost(data[0]));
      setIsLoading(false);
    },
    [slug]
  );

  return (
    <>
      <Navbar />
      {isloading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
        <>
          <section className="px-5 xl:max-w-6xl xl:mx-auto pb-10">
            <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl text-center mt-5 ">
              {singlePost.title}
            </h1>
            {singlePost.mainImage && singlePost.mainImage.asset && (
              <img
                src={singlePost.mainImage.asset.url}
                alt={singlePost.title}
                title={singlePost.title}
                className="blog__image rounded-top"
              />
            )}
            <div className="block__content">
              <SanityBlockContent
                blocks={singlePost.body}
                projectId="ltajmjiu"
                dataset="production"
              />
              <button>
                <Link
                  to="/news"
                  className="py-2 py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold mb-5"
                >
                  Read more news stories
                </Link>
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
}
