//TODO this page getServerSideProps

import { IDonation } from "@libs/types";
import { NextPage } from "next";

const stats: NextPage<{ donations: IDonation[] }> = ({ donations }) => {
  const getTotalDonation = (): String => {
    const total = donations.reduce((acc, donation) => acc + donation.amount, 0);
    return `${total}$`;
  };
  return (
    <div className="grid h-full gap-5 p-6 lg:px-24 md:grid-cols-2">
      <div className="flex flex-col justify-center space-y-3 text-white ">
        <div className="items-center w-10/12 mx-auto textBlock-wrapper md:py-14 bg-gray-dark">
          <h1 className="text-2xl font-medium md:text-5xl text-yellow">
            Total Donations
          </h1>
          <span className="px-6 py-4 text-2xl tracking-wide cursor-pointer md:text-3xl bg-gray-light">
            {getTotalDonation()}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-3 text-center">
        <h1 className="mb-4 text-2xl font-medium md:text-5xl text-yellow">
          Last 5 Donators
        </h1>
        {
          //todo add type
          donations.map((d, i) => (
            <div
              className="flex justify-between px-6 py-3 text-xl cursor-pointer bg-gray-dark"
              key={i}
            >
              <span>{d.name}</span>
              <span>{d.amount}$</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  //todo change localhost to env
  // console.log(process.env.VERCEL_URL);
  // console.log(`${process.env.VERCEL_URL}/api/donations`);
  console.log("API", process.env.API_BASE_ENDPOINT);

  const res = await fetch(`${process.env.API_BASE_ENDPOINT}/api/donations`);

  const data = await res.json();
  console.log(data);

  return {
    props: {
      donations: data,
    },
  };
};

export default stats;
