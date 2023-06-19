import "../style/services.css";
import icon1 from "../assets/icons/Icon.png";
import icon2 from "../assets/icons/Icon (1).png";
import icon3 from "../assets/icons/Icon (2).png";
const Serviceses = () => {
  return (
    <section className="container services">
      <div className="service_head_line">
        <h3>
          Innovatiove solutions for <br />{" "}
          <span className="head_title">changing</span>
        </h3>
        <button className="btn">
          Our Services<i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="service_container">
        <div className="service">
          <img src={icon1} alt="" />
          <h2>Front end Development</h2>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design.
          </p>
        </div>
        <div className="service">
          <img src={icon2} alt="" />
          <h2>Back end Development</h2>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design.
          </p>
        </div>
        <div className="service">
          <img src={icon3} alt="" />
          <h2>Mern Stack Developer</h2>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Serviceses;
