import ProjectCardSmall from '../ProjectCardSmall';
import ProjectCardBig from '../ProjectCardBig';

const ProjectsSections = ({ projects }) => {
  return (
    <section className="container max-w-6xl w-11/12 py-20 lg:pt-28">
      <h2 className="text-5xl font-bold text-center mb-20 lg:mb-34 lg:text-7xl">
        highlighted projects.
      </h2>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-rows-2">
        {projects.length > 0 ? (
          <>
            <ProjectCardBig className="" project={projects[0]} />
            <ProjectCardSmall className="" project={projects[1]} />
            <ProjectCardSmall className="" project={projects[2]} />
            <ProjectCardBig className="" project={projects[3]} />
          </>
        ) : (
          <p>There was an error?</p>
        )}
      </ul>
    </section>
  );
};

export default ProjectsSections;
