import Navbar from "../../components/navbar";

export default function contact() {
  return (
   <div className="contact-container">
    <section className="navbar-section">
        <Navbar />
    </section>
    <div className="contact-section-container">
        <section className="contact-info-section">
            <div className="contact-title">
                <h1>Contact</h1>
            </div>
            <div className="contact-content">
                <p>Email</p>
                <p>Phone Number</p>
                <p>Address</p>
            </div>
        </section>
        <section className="contact-socials">
            <div className="contact-socials-title">
                <h1>Socials</h1>
            </div>
            <div className="contact-socials-content">
                <p>Linkedin</p>
                <p>Github</p>
                <p>Twitter</p>
            </div>
        </section>
    </div>
   </div>
  );
}
