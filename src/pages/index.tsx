import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();
  return (
    <div className="grid p-5 lg:px-24 md:grid-cols-2">
      <div className="textBlock-wrapper">
        <h1 className="textBlock-title">
          <span className="font-bold">Help </span>Mr. White
        </h1>
        <p className="textBlock-subtitle">
          My dad is amazing. It's funny, but I didn't know that until I found
          out he was going to die.
        </p>
        <button
          onClick={() => push("/donate")}
          className="w-32 p-2 text-2xl font-medium tracking-wider text-black uppercase focus:outline-none md:w-48 bg-yellow"
        >
          Donate
        </button>
      </div>

      <Image
        src="/assets/hero.png"
        alt="walter white"
        height={670}
        width={700}
        objectFit="contain"
        quality={100}
      />
    </div>
  );
}
