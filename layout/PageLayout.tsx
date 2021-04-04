const PageLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center px-10 pt-20 sm:pt-40">
      {children}
    </div>
  );
};

export default PageLayout;
