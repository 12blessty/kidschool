import ClassesCard from "../components/ClassesCard";
import Footer from "../components/Footer";

const Classes = () => {
  return (
    <div className="main-container">
      <section className="classes-container">
        <h1>Classes</h1>
        <div className="card-container">
          <ClassesCard />
          <ClassesCard />
          <ClassesCard />
          <ClassesCard />
          <ClassesCard />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Classes;
