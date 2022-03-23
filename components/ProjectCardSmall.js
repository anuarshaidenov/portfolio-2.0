import Link from 'next/link';

const ProjectCardSmall = ({ className }) => {
  return (
    <Link href="/projects/slug" passHref>
      <div
        className={`border-solid border-2 border-black px-4 py-10 rounded-2xl text-center grid gap-5 justify-items-center hover:shadow-[-6px_6px_#000] transition-shadow duration-300 ease-in-out cursor-pointer ${
          className || ''
        }`}
      >
        <h3 className="font-bold text-3xl">project title.</h3>
        <ul className="flex flex-wrap justify-center items-center gap-2 max-w-[280px]">
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
        <p>
          &quot;Awesome books&quot; is a simple website that displays a list of
          books and allows you to add and remove books from that list.
        </p>
      </div>
    </Link>
  );
};

export default ProjectCardSmall;
