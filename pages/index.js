import Head from 'next/head';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSections from '../components/sections/ProjectsSection';
import { NextSeo } from 'next-seo';
import { BASE_API_URL } from '../helpers/constants';

export default function Home({ projects }) {
  return (
    <>
      <NextSeo title="anuar shaidenov's portfolio | home" />
      <HeroSection />
      <ProjectsSections projects={projects} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${BASE_API_URL}/projects`);
  const data = await res.json();

  return {
    props: {
      projects: data,
      revalidate: 10,
    },
  };
};
