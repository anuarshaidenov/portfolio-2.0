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
  const data = [
    {
      id: 1,
      title: 'Kquika',
      description:
        'Kquika helps airline and aerospace enterprises with an automated solution that monitors flights for disruptions due to mechanical failures and weather conditions, provides the best alternative routes during disruptions, communicates with disgruntled passengers, and offers real-time support.',
      created_at: '2022-07-02T15:02:52.989Z',
      updated_at: '2022-07-02T15:02:52.989Z',
      image: 'https://www.kquika.com/og-image.png',
      technologies: [
        'NextJS',
        'Framer Motion',
        'Static Site Generation',
        'TailwindCSS',
      ],
      repository: null,
      live: 'https://www.kquika.com/',
    },
    {
      id: 2,
      title: 'Car Booking',
      description:
        'A web app that allows you to register and reserve premium cars. The project was dne in a group of 5 people. It consisits of front-end and back-end. I was working mainly in a front-end team, leading the teammates and controlling the proccess of the app.',
      created_at: '2022-07-02T15:02:52.995Z',
      updated_at: '2022-07-02T15:02:52.995Z',
      image:
        'https://raw.githubusercontent.com/anuarshaidenov/car-booking-service-front-end/dev/screenshot-1.png',
      technologies: [
        'React',
        'Redux',
        'TailwindCSS',
        'Ruby on Rails',
        'Authentication',
        'CRUD',
        'RSpec Testing',
        'TDD',
      ],
      repository:
        'https://github.com/DelhinRharl/car-booking-service-front-end',
      live: 'https://deploy-preview-37--willowy-empanada-95e169.netlify.app/',
    },
    {
      id: 3,
      title: 'Premstats',
      description:
        'A web app that displays current stats of your favorite Premier League team. Makes use of the football api. Check your favorite Premier League teams statistics!',
      created_at: '2022-07-02T15:02:53.000Z',
      updated_at: '2022-07-02T15:02:53.000Z',
      image:
        'https://raw.githubusercontent.com/anuarshaidenov/premstats/dev/screenshot-1.png',
      technologies: ['React', 'Redux', 'SCSS', 'React Testing Library', 'TDD'],
      repository: 'https://github.com/anuarshaidenov/premstats',
      live: 'https://premstats.netlify.app/',
    },
    {
      id: 4,
      title: 'Awesome Books',
      description:
        '"Awesome books" is a simple web app that displays a list of books and allows you to add and remove books from that list. The purpose of this project was to use my vanilla JS skills and create a simple CRUD app, and showcase my styling skills with SCSS/Sass.',
      created_at: '2022-07-02T15:02:53.004Z',
      updated_at: '2022-07-02T15:02:53.004Z',
      image:
        'https://raw.githubusercontent.com/anuarshaidenov/Awesome-books/master/screenshot.png',
      technologies: ['Vanilla JS', 'HTML/CSS', 'SCSS', 'CRUD', 'Modularity'],
      repository: 'https://github.com/anuarshaidenov/Awesome-books',
      live: 'https://anuarshaidenov.github.io/Awesome-books/',
    },
  ];

  return {
    props: {
      projects: data,
    },
    revalidate: 10,
  };
};
