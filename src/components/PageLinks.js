import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const MobileNav = ({toggle}) => {
  return (
    <div className={`navlink mobile ${toggle}`}>
     <section>
     <NavLink to="/">Home</NavLink>
      <NavLink to="about">About Us</NavLink>
      <NavLink to="classes">Classes</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
     </section>
     <section className="join-us">
        <button>
          <span>Join Us</span>
          <FaArrowRight />
        </button>
     </section>
     </div>
  );
}

const DesktopNav = () => {
  return (
    <div className="navlink desktop">
     <section>
     <NavLink to="/">Home</NavLink>
      <NavLink to="about">About Us</NavLink>
      <NavLink to="classes">Classes</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
     </section>
     <section className="join-us">
        <button>
          <span>Join Us</span>
          <FaArrowRight />
        </button>
     </section>
     </div>
  );
}



const PageLinks = ({toggle}) => {
  return (
    <>
      <MobileNav toggle={toggle}/>
      <DesktopNav/>
    </>
  );
};

export default PageLinks;
