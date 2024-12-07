import Link from "next/link";
import Nav from "./Nav";
import Moblenav from "./Moblenav";


const Header = () => {
  return (
    <header className="text-white  relative z-10">
      <div className="container mx-auto flex justify-between items-center  relative">
        {/* Logo */}
        <Link href="/" className="absolute left-10  md:px-4">
          <h1 className="text-xl font-semibold md:mt-24 mt-20">
            Dani<span>.</span>
          </h1>
        </Link>

        {/* Navigation Menu */}
        <div className="absolute right-0 md:mt-24 hidden md:block">
          <Nav />
        </div>
        <div>
        <Moblenav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
