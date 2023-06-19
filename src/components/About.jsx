/* eslint-disable react/no-unescaped-entities */
import "../style/about.css";
import about from "../assets/images/about2.webp";
import aboutI1 from "../assets/icons/about2.png";
import aboutI2 from "../assets/icons/about1.png";

const About = () => {
  return (
    <section className="about">
      <div className="container ">
        <div className="about_left">
          <img src={about} alt="" />
        </div>
        <div className="about_right ">
          <button className="about_btn">I'm a Developer</button>
          <h3>
            I Can Design Anything You <br />{" "}
            <span className="head_title"> Want.</span>{" "}
          </h3>
          <p>
            Standard dummy text ever since the unknown printer took galley of
            scramble make a type specimen book has the been industr standard
            dummy text ever since printer took type make type specimen book.
          </p>
          <div className="about_icons">
            <div className="about_icon">
              <img src={aboutI1} alt="" />
              <div>
                <span className="modern">Modern Design</span>
                <br />
                <span className="modern_text">
                  Standard dummy text ever since the unknown printer took.
                </span>
              </div>
            </div>
            <div className="about_icon">
              <img src={aboutI2} alt="" />
              <div>
                <span className="modern">Modern Design</span>
                <br />
                <span className="modern_text">
                  Standard dummy text ever since the unknown printer took.
                </span>
              </div>
            </div>
          </div>
          <button className="btn">
            About Me <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
