const Shimmer = () => {
  return (
    <div className="mx-48 flex flex-wrap justify-between">
      {Array(6)
        .fill()
        .map((ele, index) => {
          return (
            <div key={index} className="mb-8">
              <div className="w-72 h-44 bg-slate-100"></div>
              <div className="w-36 h-4 bg-slate-100 mt-3"></div>
              <div className="w-24 h-3 bg-slate-100 mt-3"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
