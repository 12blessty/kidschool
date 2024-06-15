const ClassesCard = () => {
  return (
    <div className="classes-card">
      <section className="card">
        <div className="card-circle"></div>
        <div className="card-square">
          <section>
            <h1>Launguage &amp; Speaking</h1>
          </section>
          <section className="teacher-details-main">
            <div className="teacher-details-con">
              <div className="teacher-icon"></div>
              <div>
                <h3>Mr. Jokoto</h3>
                <p>Teacher</p>
              </div>
            </div>
            <div>
              <span>GHS 4000</span>
            </div>
          </section>
          <section>
            <div>
              <h3>Age:</h3>
              <p>2-8 Years</p>
            </div>
            <div>
              <h3>Time:</h3>
              <p>6-8 PM</p>
            </div>
            <div>
              <h3>Capacity:</h3>
              <p>30 Kids</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ClassesCard;
