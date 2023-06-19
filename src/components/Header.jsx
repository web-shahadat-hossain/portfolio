import logo from "../assets/logo/Logo.webp";
import "../style/header.css";
const Header = () => {
  return (
    <section className="header">
      <header className="container">
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a className="active " href="">
                Home
              </a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header_social">
          <h6>Follow Us:</h6>
          <div>
            <span>
              <i className="fa-brands fa-linkedin-in"></i>
            </span>
            <span className="github">
              <i className="fa-brands fa-github"></i>
            </span>
            <span>
              <i className="fa-brands fa-facebook-f"></i>
            </span>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
