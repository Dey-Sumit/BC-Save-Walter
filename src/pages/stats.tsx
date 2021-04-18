//TODO this page getServerSideProps

const stats = ({ donations }) => {
  return (
    <div className="grid h-full gap-5 p-6 lg:px-24 md:grid-cols-2">
      <div className="flex flex-col justify-center space-y-3 text-white ">
        <div className="items-center w-10/12 mx-auto textBlock-wrapper md:py-14 bg-gray-dark">
          <h1 className="text-2xl font-medium md:text-5xl text-yellow">
            Total Donations
          </h1>
          <span className="px-6 py-4 text-2xl tracking-wide cursor-pointer md:text-3xl bg-gray-light">
            120$
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-3 text-center">
        <h1 className="mb-4 text-2xl font-medium md:text-5xl text-yellow">
          Top Donators
        </h1>
        {
          //todo add type
          [...Array(5)].map((d, i) => (
            <div
              className="flex justify-between px-6 py-3 text-xl cursor-pointer bg-gray-dark"
              key={i}
            >
              <span>Sam</span>
              <span>10$</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default stats;
