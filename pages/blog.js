import { useEffect } from 'react';

const BlogPage = () => {
  useEffect(() => {
    fetch('https://mediumpostapi.herokuapp.com/?usermedium={{anuarshaidenov}}')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.dataMedium[0].description);
      });
  }, []);
  return (
    <section className="container max-w-6xl w-11/12 py-20 md:pt-40 min-h-screen">
      <h1 className="font-bold text-5xl mb-8 sm:text-7xl sm:mb-10 md:text-8xl md:mb-12 lg:text-9xl lg:mb-16">
        read my blog posts.
      </h1>
    </section>
  );
};

export default BlogPage;
