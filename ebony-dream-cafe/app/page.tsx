import React from "react";
import Image from "next/image";
import Head from "next/head";
import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/navbar";


export default function Home() {
  return (
   <div className="container">
    <section className="navbar-section-container">
     <Navbar />
    </section>
    <section id="home" className="home">
      <div className="home-video-container">
        <video className="background-video" src="vid2.mp4" autoPlay loop muted></video>
      </div>
      <div className="home-text-overlay">
        <h1>Ebony Dream Cafe</h1>
        <h2>Brewing Dreams</h2>
        <p>Since 1997</p>
      </div>
    </section>
    <section id="about" className="about">
      <div className="about-title">
        <h1>About US</h1>
      </div>
      <div className="about-us">
        <p>
        At Ebony Dream Cafe, we are dedicated to the art of exceptional coffee. Using only the finest, ethically-sourced beans, we deliver a luxurious and refined coffee experience with every cup.
        With a steadfast commitment to quality—both in our coffee and our customer service—we provide more than just a drink; we offer an inviting space where every detail is crafted for your enjoyment. Step in and indulge in a world where excellence meets sophistication.
        </p>
      </div>
    </section>
    
    

    <section id="about-2" className="about-2">
      <div className="offer">
        <div className="offer-title">
          <h1>Our Offering</h1>
        </div>
        <div className="offer-paragraph">
          <p>
          At Ebony Dream Cafe, we pride ourselves on offering an exquisite selection of coffee,
          carefully crafted to suit the unique tastes of each guest. With sophisticated methods and the 
          highest standards of hygiene, we use premium brewing equipment to deliver an unparalleled 
          coffee experience. Here’s a glimpse into the distinctive coffee varieties we offer:
          </p>
        </div>

        <div className="coffee-varieties">
          <h1>Arabica</h1>
          <p>
          A classic favorite, Arabica beans deliver a vibrant, rich flavor with delicate acidity and a slightly sweet undertone. It’s a versatile choice, ideal for those who enjoy a traditional, aromatic cup with a smooth finish.
          </p>
          <h1>Kona</h1>
          <p>
          Sourced from the rich volcanic soils of Hawaii, Kona coffee is a rare gem. Its smooth, velvety body and subtle nutty sweetness make it an ideal choice for those who appreciate a refined, balanced cup with a hint of island warmth.
          </p>
          <h1>Robusta</h1>
          <p>
          For coffee lovers seeking a bold, full-bodied experience, Robusta beans offer a deep, intense flavor profile with earthy undertones. With higher caffeine content, it’s perfect for those who enjoy a strong, invigorating cup that lingers on the palate.
          </p>
          <h1>Blue Mountain Jamaica</h1>
          <p>
          Grown in the misty Jamaican mountains, Blue Mountain coffee is known for its mild flavor and exceptional smoothness. This rare, high-end bean offers floral notes with a gentle acidity, perfect for those who prefer a sophisticated, nuanced brew.
          </p>
        </div>
       
      </div>
      <div className="about-2-img">
        <img src="coffee-beans.webp" loading="lazy"></img>
      </div>
    </section>

    
   </div>
  );
}
