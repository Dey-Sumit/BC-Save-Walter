import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <div
      className="flex items-center justify-between px-3 lg:px-20"
      style={{ height: "10vh" }}
    >
      <a>
        <Link href="/">
          <div className="flex items-center space-x-4 cursor-pointer ">
            <img
              src="assets/logo.png"
              alt=""
              className="object-contain w-12 h-12 "
            />
            <div className="hidden text-gray-200 md:block">
              <p>Father,Husband & Teacher</p>
              <p>Save Mr. White</p>
            </div>
          </div>
        </Link>
      </a>

      <div className="flex space-x-6 text-base lg:text-xl ">
        <Link href="/donate">
          <a className={pathname === "/donate" ? "text-yellow" : ""}>DONATE</a>
        </Link>
        <Link href="/people">
          <a className={pathname === "/people" ? "text-yellow" : ""}>FAMILY</a>
        </Link>
        <Link href="/stats">
          <a className={pathname === "/stats" ? "text-yellow" : ""}>STATS</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
