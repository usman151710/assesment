import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <p>Follow Us</p>
                <div className="social-icons">
                    <a href="#" className="icon"><FaFacebookF /></a>
                    <a href="#" className="icon"><FaTwitter /></a>
                    <a href="#" className="icon"><FaGooglePlusG /></a>
                    <a href="#" className="icon"><FaInstagram /></a>
                    <a href="#" className="icon"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;