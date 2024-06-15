import React from "react";
import teacher from "../assets/images/call-to-action.jpg";
import { FaArrowRight } from "react-icons/fa6";

const BecomeATeacher = () => {
  return (
    <div className="become-a-teacher">
      <section>
        <img src={teacher} alt="" />
      </section>
      <section>
        <h1>Become A Teacher</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          quos excepturi ad repudiandae molestiae aliquid vel? Vel esse, minus
          itaque tempore molestiae cum qui ab quae soluta illo sint ut.
        </p>
        <button type="submit">
          <div>
            <span>Get Started Now</span>
            <FaArrowRight />
          </div>
        </button>
      </section>
    </div>
  );
};

export default BecomeATeacher;
