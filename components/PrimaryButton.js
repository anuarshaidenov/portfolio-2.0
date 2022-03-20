const PrimaryButton = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={`py-3 px-6 hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl ${
        className || ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
