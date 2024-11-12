import { Link } from "react-router-dom";
import RexFitLogo from "../common/RexFitLogo";
import ThemeToggle from "../common/ThemeToggle";

const LandingNavbar = () => {
  return (
    <header className="h-[80px] absolute w-full  flex items-center top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full">
        <div className="flex justify-around items-center w-full mr-6 text-white">
          <RexFitLogo />

          <nav className=" md:flex gap-6 md:gap-24 justify-center hidden">
            <ul className="flex space-x-2 font-semibold text-sm">Home</ul>
            <ul className="flex space-x-2 font-semibold text-sm">Contact Us</ul>
            <ul className="flex space-x-2 font-semibold text-sm">About</ul>
          </nav>
          <div className="flex md:gap-9 gap-5   mr-[-40px]">
            <Link to={"/signup"}>
              <h1>Signup</h1>
            </Link>
            <Link to={"/signup"}>
              <h1>login</h1>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default LandingNavbar;
