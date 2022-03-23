const ProjectDetails = () => {
  return (
    <section className="container max-w-6xl w-11/12 py-20 lg:pt-28">
      <h1 className="font-bold text-5xl mb-8 sm:text-7xl sm:mb-10 md:text-8xl md:mb-12 lg:text-9xl lg:mb-16">
        long long project title.
      </h1>
      <p className="mb-8 max-w-4xl text-xl leading-8 lg:text-2xl lg:leading-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quisque sem
        urna euismod consectetur consectetur malesuada facilisi. Nec volutpat
        sit purus urna, sit. At neque morbi arcu, consectetur ornare at
        facilisis odio. Tellus congue commodo adipiscing amet. Volutpat nibh
        tellus in feugiat risus lobortis id aliquam tortor. Lobortis sed amet,
        ultrices aliquet. Commodo cras venenatis purus mollis. Vitae sed sed id
        facilisis blandit.
      </p>
      <h3 className="font-bold text-2xl mb-2">technologies used:</h3>
      <ul className="list-disc list-inside font-secondary">
        <li>React</li>
        <li>Redux</li>
        <li>Tailwind CSS</li>
        <li>NextJS</li>
      </ul>
    </section>
  );
};

export default ProjectDetails;
