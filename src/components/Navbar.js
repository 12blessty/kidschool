import Logo from "./Logo";
import PageLinks from "./PageLinks";
import { FaArrowRight, FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <div className="nav-right-content">
      <PageLinks />
      <div className="join-us">
        <button>
          <span>Join Us</span>
          <FaArrowRight />
        </button>
      </div>
      </div>
      <div>
      <FaBars/>
      </div>
    </nav>
  );
};

export default Navbar;
