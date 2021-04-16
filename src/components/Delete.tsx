const Delete = () => {
  return (
    <div className="py-48 px-36">
      <div className="flex flex-col mx-auto space-y-6 w-max">
        <h1 className="text-4xl font-bold text-gray-50 ">
          This is a boilerplate for Next js with TypeScript and Tailwind
          CSS(@JIT)
        </h1>
        <div className="flex flex-col pl-8 space-y-4 text-xl font-medium text-gray-300">
          <h3>- src based project directory</h3>
          <h3>- typeScript path mapping already configured</h3>
        </div>
        <div className="flex flex-col pl-8 space-y-4 text-xl font-medium text-gray-300">
          <h5 className="text-2xl">Tips:</h5>
          <h3>
            - vs code users : install Tailwind CSS IntelliSense & Headwind
          </h3>
          <h3>- use next-connect for the api</h3>
        </div>
      </div>
    </div>
  );
};

export default Delete;
