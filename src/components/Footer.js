import { Link } from "react-router-dom";
import c1 from "../assets/images/classes-1.jpg";
import c2 from "../assets/images/classes-2.jpg";
import c3 from "../assets/images/classes-3.jpg";
import c4 from "../assets/images/classes-4.jpg";
import c5 from "../assets/images/classes-5.jpg";
import c6 from "../assets/images/classes-6.jpg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <section>
          <h1>Get In Touch</h1>
          <div>
            <address>
              <span>Icon</span> &nbsp; 123 Street, Ave <br />
              <span>Icon</span> &nbsp; (+233) 288 00000 <br />
              <span>Icon</span> &nbsp; info@mywebsite.com
            </address>
          </div>
        </section>
        <section>
          <h1>Quick Links</h1>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Classes</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
          </ul>
        </section>
        <section>
          <h1>Photo Gallery</h1>
          <div className="footer-photo-gallery">
            <div>
              <img src={c1} alt="" />
            </div>
            <div>
              <img src={c2} alt="" />
            </div>
            <div>
              <img src={c3} alt="" />
            </div>
            <div>
              <img src={c4} alt="" />
            </div>
            <div>
              <img src={c5} alt="" />
            </div>
            <div>
              <img src={c6} alt="" />
            </div>
          </div>
        </section>
        <section>
          <h1>Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem iste, tenetur, ducimus eum aut nisi voluptatibus modi
            velit optio officiis nesciunt corporis nulla odit vel minima
            veritatis libero accusantium aliquam.
          </p>
        </section>
      </div>
      <div className="copyright">
        &copy; Horla Adjornor | All rights reserved | Designed by: Promax Gh
      </div>
    </div>
  );
};

export default Footer;
