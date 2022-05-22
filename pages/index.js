import Head from 'next/head';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSections from '../components/sections/ProjectsSection';
import { NextSeo } from 'next-seo';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <NextSeo title="Anuar's Portfolio | Home" />
      <HeroSection />
      <ProjectsSections />
    </>
  );
}
