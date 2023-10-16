import { FaMapPin, FaPhone, FaRegEnvelope } from 'react-icons/fa';
import './contact.css';

export const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="contact-details">
                <h2>Contact Us</h2>
                <h3>Address</h3>
                <p>Swing by for a cup of coffee, or whatever</p>
                <div>
                    <FaMapPin />
                    <p>Amman, Jordan</p>
                </div>
                <div>
                    <FaPhone />
                    <p>+1 234 567 890</p>
                </div>
                <div>
                    <FaRegEnvelope />
                    <p>contact@example.com</p>
                </div>
            </div>
            <div className="contact-form">
                <form action='#'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <div className="checkbox-wrapper">
                        <input type="checkbox" id="subscribe" name="subscribe" />
                        <span className="checkbox-text">I like it!</span>
                    </div>

                    <div className='button-wrapper'>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;