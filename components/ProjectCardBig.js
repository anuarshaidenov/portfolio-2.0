import Link from 'next/link';

const ProjectCardBig = ({ className = '', project }) => {
  const { id, title } = project;

  return (
    <Link href={`/projects/${id}`} passHref>
      <div
        className={`border-solid border-2 border-black px-4 py-10 lg:px-8 lg:py-15 rounded-2xl text-center grid gap-5 justify-items-center lg:justify-items-start lg:gap-y-8 lg:col-span-3 lg:text-left lg:grid-cols-3 lg:gap-x-8 hover:shadow-[-6px_6px_#000] transition-shadow duration-300 ease-in-out cursor-pointer bg-primary ${
          className || ''
        }`}
      >
        <h3 className="font-bold text-3xl lg:col-span-3 lg:text-7xl">
          {title}.
        </h3>
        <ul className="flex flex-wrap justify-center items-center content-start lg:justify-start max-w-[280px] gap-[10px]">
          <li className="border-solid font-secondary border-2 border-black p-1 rounded-2xl text-[.6rem] px-2">
            card tag
          </li>
          <li className="border-solid font-secondary border-2 border-black p-1 rounded-2xl text-[.6rem] px-2">
            card tag
          </li>
          <li className="border-solid font-secondary border-2 border-black p-1 rounded-2xl text-[.6rem] px-2">
            card tag
          </li>
          <li className="border-solid font-secondary border-2 border-black p-1 rounded-2xl text-[.6rem] px-2">
            card tag
          </li>
          <li className="border-solid font-secondary border-2 border-black p-1 rounded-2xl text-[.6rem] px-2">
            card tag
          </li>
        </ul>
        <p className="lg:col-span-2">
          &quot;Awesome books&quot; is a simple website that displays a list of
          books and allows you to add and remove books from that list.
        </p>
      </div>
    </Link>
  );
};

export default ProjectCardBig;
