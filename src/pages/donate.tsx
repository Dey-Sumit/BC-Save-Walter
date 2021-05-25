import { FunctionComponent, useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
export const DonationAmount: FunctionComponent<{
  amount: Number;
  value: Number;
  setAmount: Function;
}> = ({ amount, setAmount, value }) => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);

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
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const addPaypalScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=AUYYe_jA-9FTUNZF-UFRISfMvUAnKTzxAb1pELVDW36PaFFvg_a3YXGJfgrc32USF79FL3C59jTluzvc`;
      script.async = true;

      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    };
    addPaypalScript();
  }, []);

  const addDonationInDB = async (name: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/donations/`,
        {
          method: "POST",
          body: JSON.stringify({
            name,
            amount,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
          {scriptLoaded ? (
            <PayPalButton
              amount={amount}
              onSuccess={(details, data) => {
                //save the transaction
                // console.log(details);
                addDonationInDB(details.payer.name.given_name);
              }}
            />
          ) : (
            <span>Loading...</span>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default donate;
