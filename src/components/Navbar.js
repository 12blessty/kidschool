import Logo from "./Logo";
import PageLinks from "./PageLinks";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <PageLinks />
      <div className="join-us">
        <button>
          <span>Join Us</span>
          <FaArrowRight />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
