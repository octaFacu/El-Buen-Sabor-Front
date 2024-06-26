import { FC } from "react";
import "./Footer.css";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import twitter from "../../../assets/twitter.png";

const Footer = () => {
    return (
        <footer className="bg-footer text-light py-5 ">
            <div className="container">
                <div className="d-flex justify-content-evenly footer-container">
                    {/* Sección 1: Siguenos */}
                    <div className="responsiveFooter">
                        <h5>Síguenos</h5>
                        <ul className="list-unstyled ">
                            <li>
                                <img src={facebook} alt="Fb" className="social-logo me-2" />
                                <a href="#" className="social-link">Facebook</a>
                            </li>
                            <li>
                                <img src={instagram} alt="Ig" className="social-logo me-2" />
                                <a href="#" className="social-link">Instagram</a>
                            </li>
                            <li>
                                <img src={twitter} alt="Tw" className="social-logo me-2" />
                                <a href="#" className="social-link">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    {/* Sección 2: Donde estamos */}
                    <div className="responsiveFooter">
                        <h5>Donde estamos</h5>
                        <p>Dirección del local</p>
                    </div>
                    {/* Sección 3: Contactanos */}
                    <div className="responsiveFooter">
                        <h5>Contáctanos</h5>
                        <p>Número de teléfono: (123) 456-7890</p>
                        <p>Email: ejemplo@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;