import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">JIIN PARK</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Service</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://velog.io/@dreaming_of_zen" className="footer__social-link" target="_blank">
                <i class="uil uil-blogger-alt"></i>
                </a>

                <a href="https://github.com/REDCRAB11" className="footer__social-link" target="_blank">
                <i class="uil uil-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer