import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { BASE_API_URL } from '../../helpers/constants';

const ProjectDetails = ({ project }) => {
  const { title, description, technologies, live, repository } = project;

  return (
    <>
      <NextSeo title={`anuar shaidenov | ${title}`} />
      <section className="container max-w-6xl w-11/12 py-20 md:pt-40">
        <h1 className="font-bold text-5xl mb-8 sm:text-7xl sm:mb-10 md:text-8xl md:mb-12 lg:text-9xl lg:mb-16">
          {title}.
        </h1>
        <p className="mb-8 max-w-4xl text-xl leading-8 lg:text-2xl lg:leading-9">
          {description}
        </p>
        <div className="mb-4 flex flex-col items-start justify-start">
          <Link href={live}>
            <a className="font-secondary underline" target="_blank">
              live link.
            </a>
          </Link>
          <Link href={repository}>
            <a className="font-secondary underline" target="_blank">
              repository.
            </a>
          </Link>
        </div>
        <h3 className="font-bold text-2xl mb-2">technologies used:</h3>
        <ul className="list-disc list-inside font-secondary">
          {technologies.map((technology) => (
            <li key={technology}>{technology}.</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${BASE_API_URL}/projects`);
  const data = await res.json();

  const paths = data.map((project) => ({
    params: {
      id: project.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${BASE_API_URL}/projects/${params.id}`);
  const data = await res.json();

  return {
    props: {
      project: data,
    },
    revalidate: 10,
  };
};

export default ProjectDetails;
