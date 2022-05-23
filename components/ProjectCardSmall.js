import Link from 'next/link';

const ProjectCardSmall = ({ className = '', project }) => {
  const { id, title, description, technologies } = project;
  return (
    <Link href={`/projects/${id}`} passHref>
      <div
        className={`border-solid border-2 border-black px-4 py-10 rounded-2xl text-center grid gap-5 justify-items-center hover:shadow-[-6px_6px_#000] transition-shadow duration-300 ease-in-out cursor-pointer bg-primary ${
          className || ''
        }`}
      >
        <h3 className="font-bold text-3xl">{title}.</h3>
        <ul className="flex flex-wrap justify-center items-center gap-2 max-w-[280px]">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="border-solid font-secondary border-2 border-black p-1 rounded-2xl text-[.6rem] px-2"
            >
              {technology}
            </li>
          ))}
        </ul>
        <p>{description.slice(0, 100)}...</p>
      </div>
    </Link>
  );
};

export default ProjectCardSmall;
