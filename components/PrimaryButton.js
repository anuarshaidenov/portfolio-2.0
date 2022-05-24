const PrimaryButton = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={`py-3 px-6 hover:bg-secondary hover:text-white hover:border-transparent transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] ${
        className || ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
