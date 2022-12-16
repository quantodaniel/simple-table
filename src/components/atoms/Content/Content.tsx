const Content = ({ children }) => {
  return (
    <div className="bg-white flex flex-col flex-1 border border-slate-300 rounded-lg">
      {children}
    </div>
  );
};

export default Content;
