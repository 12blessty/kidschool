import BecomeATeacher from "../components/BecomeATeacher";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="main-container">
      <section className="homepage-intro">
        <h1>School Facilities</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate
          magni optio alias excepturi perferendis cupiditate soluta eveniet,
          enim nobis nesciunt error voluptates et quo, ratione aspernatur
          architecto nemo tempora, amet praesentium non nam mollitia quidem
          possimus. Sed quam, minus, eos expedita ipsam ratione soluta possimus
          eius asperiores quod magni.
        </p>
      </section>
      <section>
        <BecomeATeacher />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
