import Head from 'next/head';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSections from '../components/sections/ProjectsSection';
import { NextSeo } from 'next-seo';
import { BASE_API_URL } from '../helpers/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProjects } from '../redux/projects/projectsSlice';

export default function Home({ projects }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProjects(projects));
  });

  return (
    <>
      <NextSeo title="Anuar's Portfolio | Home" />
      <HeroSection />
      <ProjectsSections />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${BASE_API_URL}/projects`);
  const data = await res.json();

  return {
    props: {
      projects: data,
    },
  };
};
