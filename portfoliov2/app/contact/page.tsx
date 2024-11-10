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
                <p>ahmedbilal1kx@gmail.com</p>
                <p>03330273008</p>
                <p>Gulshan-e-iqbal Block 2, Near Continental Bakery</p>
            </div>
        </section>
        <section className="contact-socials">
            <div className="contact-socials-title">
                <h1>Socials</h1>
            </div>
            <div className="contact-socials-content">
                <p>https://www.linkedin.com/in/ahmed-bilal-113278239/</p>
                <p>https://github.com/Solace-Code</p>
            </div>
        </section>
    </div>
   </div>
  );
}
