"use client";

import React, { useState } from "react";
import Image from "next/image";
import Images from "../components/Images"; // Adjust the path if necessary
import Icons from "../components/Icons"; // Adjust the path if necessary

const FeaturedProductsSection: React.FC = () => {
  // Dummy data for products
  const products = [
    { id: 1, name: "Product 1", price: "$25.00", image: Images.Home },
    { id: 2, name: "Product 2", price: "$30.00", image: Images.Home },
    { id: 3, name: "Product 3", price: "$45.00", image: Images.Home },
    { id: 4, name: "Product 4", price: "$20.00", image: Images.Home },
    { id: 5, name: "Product 5", price: "$55.00", image: Images.Home },
    { id: 6, name: "Product 6", price: "$35.00", image: Images.Home },
    { id: 7, name: "Product 7", price: "$40.00", image: Images.Home },
  ];

  const productWidth = 300; // Width of each product card (used for scroll logic)
  const [scrollPosition, setScrollPosition] = useState(0);

  // Calculate the max scroll position dynamically based on the number of products
  const maxScrollPosition = (products.length - 3) * productWidth; // Adjust this based on visible items

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - productWidth, 0)); // Scroll left and prevent scrolling beyond 0
  };

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + productWidth, maxScrollPosition)); // Scroll right and prevent scrolling beyond max
  };

  return (
    <div className="featured-products-container">
      {/* Left Arrow */}
      <button
        className="arrow left-arrow"
        onClick={scrollLeft}
        disabled={scrollPosition === 0}
      >
        &#8249;
      </button>

      {/* Products Wrapper */}
      <div
        className="products-wrapper"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {products.map((product) => (
          <div key={product.id} className="product-card-item">
            <div className="product-image-box">
              <Image
                src={product.image}
                alt={product.name}
                layout="responsive"
                width={300}
                height={200}
              />
            </div>
            <div className="product-info-box">
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <div className="product-icon-box">
                {Icons.heart} {/* Replace with actual icons */}
                {Icons.cart}  {/* Replace with actual icons */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="arrow right-arrow"
        onClick={scrollRight}
        disabled={scrollPosition >= maxScrollPosition}
      >
        &#8250;
      </button>
    </div>
  );
};

export default FeaturedProductsSection;
