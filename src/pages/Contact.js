import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="main-container">
      <div className="contact-us-container">
        <h1>Make Appointment</h1>
        <div className="make-appointment">
          <section>
            <div>
              <input type="text" placeholder="Guardian Name" />
              <input type="email" placeholder="Guardian Email" />
            </div>
            <div>
              <input type="text" placeholder="Child Name" />
              <input type="number" placeholder="Child Age" />
            </div>
            <div>
              <textarea name="" id="" placeholder="Message"></textarea>
            </div>
            <div>
              <input type="button" value="Submit" />
            </div>
          </section>
          <section className="appointment-img"></section>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
