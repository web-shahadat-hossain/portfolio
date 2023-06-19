import "../style/hero.css";
import text from "../assets/images/Text.png";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1>
            <img src={text} alt="" />
            <br />
            i’m <span className="head_title">Shahadat,</span>
            <br />
            <TypeAnimation
              sequence={[
                "React Js Developer",
                500,
                "JavaScript Developer", //  Continuing previous Text
                500,
                "Front end Developer",
                500,
                "Back end Developer",
                500,
                "Node js Developer",
                500,
                "Mern Stack Developer",
                500,
              ]}
              style={{ fontSize: "60px" }}
              repeat={Infinity}
            />
            <br />
            <button className="btn">
              Hire Me <i className="fa-solid fa-arrow-right"></i>
            </button>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
