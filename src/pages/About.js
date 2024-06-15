import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="main-container">
      <div className="about-us">
        <section>
          <h1>Learn More About Our Work And Our Cultural Activities</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aperiam eveniet atque, aut odio alias nemo qui excepturi commodi
            reprehenderit fugit. Et temporibus dolorum mollitia, maiores dolor
            error unde incidunt exercitationem quod inventore sequi facilis
            saepe ad a itaque est molestias! Laborum voluptatum nisi alias odit,
            aspernatur officia! Molestiae, deserunt.
          </p>
          <p>
            Reprehenderit ex nisi unde enim tenetur aspernatur alias, eveniet
            vel debitis, ut magnam nesciunt, quia soluta obcaecati? Mollitia
            porro adipisci consequatur tenetur qui illum? Maiores, accusantium
            officiis. Quae autem rem itaque quod dolore nostrum ex accusantium
            error nam totam impedit laboriosam, ipsa quisquam modi possimus
            obcaecati repellat laudantium libero dolor!
          </p>
          <section className="small-card-section">
            <input type="button" value="Read More" />
            <section className="badge-icon">
              <div className="image-icon"></div>
              <div>
                <p className="username">Micky Jackson</p>
                <p>CEO & Co-Founder</p>
              </div>
            </section>
          </section>
        </section>
        <section>
          <section className="about-img-one"></section>
          <section className="about-img-two"></section>
          <section className="about-img-three"></section>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
