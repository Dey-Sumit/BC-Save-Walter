import { FunctionComponent, useState } from "react";
export const DonationAmount: FunctionComponent<{
  amount: Number;
  value: Number;
  setAmount: Function;
}> = ({ amount, setAmount, value }) => {
  return (
    <span
      className={`px-4 py-2 text-lg cursor-pointer bg-gray-light ${
        amount === value ? "border-2 border-yellow" : ""
      } `}
      onClick={() => setAmount(value)}
    >
      {value}$
    </span>
  );
};

const donate = () => {
  const [amount, setAmount] = useState(10);

  return (
    <div className="grid h-full gap-2 p-6 lg:px-24 md:grid-cols-2">
      <div className="textBlock-wrapper">
        <h1 className="textBlock-title">
          You can
          <span className="font-bold text-yellow"> Help </span>
        </h1>
        <p className="textBlock-subtitle">
          To save please send your contribution to our fund & keep the series
          alive
        </p>
      </div>
      <div className="grid place-items-center">
        <div className="flex flex-col items-center px-4 py-6 mx-auto space-y-4 rounded-md md:w-10/12 bg-gray-dark">
          <h1 className="text-5xl textBlock-title">Donate Box</h1>
          <p className="textBlock-subtitle">Any amount will be appreciated</p>
          <div className="flex space-x-10">
            <DonationAmount value={1} setAmount={setAmount} amount={amount} />
            <DonationAmount value={5} setAmount={setAmount} amount={amount} />
            <DonationAmount value={10} setAmount={setAmount} amount={amount} />
          </div>

          <button>Donate</button>
        </div>
      </div>
    </div>
  );
};

export default donate;
