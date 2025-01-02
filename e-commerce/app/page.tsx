import Image from "next/image";
import Navbar from "../components/Navbar";
import Images from "../components/Images";
import Icon from  "../components/Icons";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <div className="home-container">
      <section className="navbar-section">
        <Navbar />
      </section>
      <section className="home-section">
        <div className="home-section-container">
        <Image src={Images.Home} alt="img" className="home-img"/>
        <div className="home-section-overlay"></div>
        </div>
        <div className="home-section-content">
          <div className="home-section-heading">
            <h1>AlphaForge</h1>
          </div>
          <div className="home-section-p">
            <p>Crafting Perfection, Empowering Your Build</p>
          </div>
        </div>
      </section>
      <section className="featured-section" id="featured">
        <div className="featured-heading-section">
          <div className="featured-icon"></div>
          <div className="featured-heading">
            <h1>Featured Products</h1>
          </div>
        </div>
        <div className="featured-products">
          <Featured />
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-section-left">
          
          <div className="contact-container">
          <div className="contact-section-left-heading">
            <h1>Contact US</h1>
          </div>
          <div className="contact-section-left-content">
            <div className="contact-phone">
              <div className="contact-phone-icon">
                {Icon.phone}
              </div>
              <div className="contact-phone-content">
                <h1>0333027XXXX</h1>
              </div>
            </div>
            <div className="contact-email">
              <div className="contact-email-icon">
                {Icon.envelope}
              </div>
              <div className="contact-email-content">
                <h1>alphaforge@gmail.com</h1>
              </div>
            </div>
            <div className="contact-location">
              <div className="contact-location-icon">
                {Icon.location}
              </div>
              <div className="contact-location-content">
                <h1>Street 123, UK</h1>
              </div>
            </div>
          </div>
          </div>

          <div className="social-container">
            <div className="social-heading">
              <h1>Our Socials</h1>
            </div>
            <div className="social-content-container">
              <div className="social-youtube">
                <div className="social-youtube-icon">
                  {Icon.youtube}
                </div>
                <div className='social-youtube-heading'>
                  <h1>Youtube</h1>
                </div>
              </div>
              <div className="social-twitter">
                <div className="social-twitter-icon">
                  {Icon.twitter}
                </div>
                <div className="social-twitter-heading">
                  <h1>Twitter</h1>
                </div>
              </div>
              <div className="social-insta">
                <div className="social-insta-icon">
                  {Icon.instagram}
                </div>
                <div className="social-insta-heading">
                  <h1>Instagram</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section-right">
  <div className="contact-section-right-heading">
    <h1>Send Us a Message</h1>
    <p>We&apos;d love to hear from you! Please fill out the form below, and we&apos;ll respond shortly.</p>
  </div>
  <div className="contact-form-container">
    <form className="contact-form">
      {/* First Name and Last Name in Row */}
      <div className="form-group row">
        <div className="input-half">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="First Name"
            required
          />
        </div>
        <div className="input-half">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>

      {/* Phone Field */}
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your Phone Number"
        />
      </div>

      {/* Message Field */}
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Your Message"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="form-submit">
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>

      </section>
    </div>
  );
}
