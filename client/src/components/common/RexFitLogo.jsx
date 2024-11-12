import { Link } from "react-router-dom";


const RexFitLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <p className="md:text-2xl text-xl font-extrabold relative dark:text-white font-michroma">
        <span className="dark:text-rex-green text-rex-green-light">R</span>exFit
        </p>
      </div>
      </Link>
  );
};

export default RexFitLogo;
