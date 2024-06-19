import { useState } from "react";
import Logo from "./Logo";
import PageLinks from "./PageLinks";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
const [menuState, setMenuState] = useState("")
const handleMenuState = () => {
  if(menuState.length > 0) {
    setMenuState("");
  } else {
    setMenuState("active");
  }
};

  return (
    <nav>
      <Logo />
      <div className="nav-right-content">
      <PageLinks toggle={menuState}/>
      </div>
      <div className="nav-menu-bar">
      <FaBars onClick={handleMenuState}/>
      </div>
    </nav>
  );
};

export default Navbar;
