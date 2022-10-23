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
          {repository && (
            <Link href={repository}>
              <a className="font-secondary underline" target="_blank">
                repository.
              </a>
            </Link>
          )}
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

  const parsedData = JSON.parse(JSON.stringify(data)).find(project=> project.id.toString() === params.id);

  return {
    props: {
      project: parsedData,
    }
  };
};

export default ProjectDetails;
