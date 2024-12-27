import Image from "next/image";
import Navbar from "../components/Navbar"
import Images from "../components/Images"
import Icons from "../components/Icons"

export default function Home() {
  return (
   <div className="home-container">
     <section className="navbar-section">
      <Navbar />
    </section>

    <div className="content-break-line"></div>

    <section className="home-section" id="home">
      <div className="home-section-container">
      <div className="home-left">
        <Image src={Images.Home} alt="img" className="home-section-image"/>
      </div>
      <div className="home-right">
        <div className="home-right-heading">
          <h1>Dreamscript</h1>
        </div>
        <div className="home-right-heading-2">
          <h1>Human History, Stories & Fate</h1>
        </div>
      </div>
      </div>
    </section>


    <section className="about-section" id="about">
        <div className="about-section-heading">
          <h1>About US</h1>
        </div>
        <div className="about-section-content">
          <p>
          Welcome to Dreamscript, where quality meets imagination.

At Dreamscript, we are passionate about delivering knowledge that matters. Our mission is to explore a world of topics and present them with care, depth, and clarity. We believe in quality over quantity, ensuring that every article is crafted to inform, inspire, and satisfy our readers.

Whether you&apos;re here to learn something new, explore fresh perspectives, or simply enjoy thoughtful content, Dreamscript is your trusted source for knowledge and inspiration. Dive in and let your curiosity take the lead!
          </p>
        </div>
    </section>

    <div className="content-break-line"></div>

    <section className="contact-section" id="contact">
      <div className="contact-top">
        <div className="contact-section-heading">
          <h1>Contact US</h1>
        </div>
        <div className="contact-content">
          <div className="contact-phone">
            <div className="contact-phone-icon">
              {Icons.phone}
            </div>
            <div className="contact-phone-content">
              <p>03330273XXX</p>
            </div>
          </div>
          <div className="contact-email">
            <div className="contact-email-icon">
              {Icons.envelope2}
            </div>
            <div className="contact-email-content">
              <p>dreamscript@gmail.com</p>
            </div>
          </div>
          <div className="contact-location">
            <div className="contact-location-icon">
              {Icons.location}
            </div>
            <div className="contact-location-content">
              <p>123 Street, UK</p>
            </div>
          </div>
        </div>
      </div>


      <div className="contact-bottom">
        <div className="contact-section-heading-2">
          <h1>Socials</h1>
        </div>
        <div className="social-content">
          <div className="social-linkedin">
            {Icons.linkedin}
          </div>
          <div className="social-twitter">
            {Icons.twitter}
          </div>
          <div className="social-instagram">
            {Icons.instagram}
          </div>
        </div>
      </div>
    </section>
    <div className="content-break-line"></div>
   </div>
  );
}
