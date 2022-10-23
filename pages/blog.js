import Link from 'next/link';
import { NextSeo } from 'next-seo';

const BlogPage = ({ posts }) => {
  return (
    <>
      <NextSeo title="anuar shaidenov | blog" />
      <section className="container max-w-6xl w-11/12 py-20 md:pt-40 min-h-screen">
        <h1 className="font-bold text-5xl mb-8 sm:text-7xl sm:mb-10 md:text-8xl md:mb-12 lg:text-9xl lg:mb-16">
          i write sometimes.
        </h1>
        <ul>
          {posts.map((post) => (
            <Link key={post.link} href={post.link} passHref>
              <a target="_blank">
                <li className="max-w-xl cursor-pointer mb-10 hover:opacity-70">
                  <p className="font-secondary text-sm mb-2">{post.date}</p>
                  <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                  <p className="text-sm">{post.description.slice(0, 240)}...</p>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    'https://mediumpostsapi.vercel.app/api/anuarshaidenov'
  );
  const data = await res.json();

  return {
    props: {
      posts: data.dataMedium,
    },
    revalidate: 10,
  };
};

export default BlogPage;
