import react from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
      <a href=":mailto:{props.emailAddress}" className="footer__link">
        {props.emailAddress}
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="#">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
