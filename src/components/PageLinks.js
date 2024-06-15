import { NavLink } from "react-router-dom";

const PageLinks = () => {
  return (
    <div className="page-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About Us</NavLink>
      <NavLink to="classes">Classes</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
    </div>
  );
};

export default PageLinks;
