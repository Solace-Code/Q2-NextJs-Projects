// pages/shopPage.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ShopNavigation } from '../../components/Shop';
import Navbar from '../../components/Navbar';
import Icon from "../../components/Icons"
import ProductFetcher from '../../components/ProductFetch';
import {useCart} from "../../context/CartContext"

interface ProductCardProps {
  image: string;
  name: string;
  price: string | number;
  _id: string; // Added _id prop
}

const ProductCard = ({ image, name, price, _id }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      _id,
      name,
      price: typeof price === 'string' ? parseFloat(price) : price,
      image
    });
  };
  
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2">
      <div className="aspect-square bg-gray-100 rounded-md overflow-hidden relative">
        <button 
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
          onClick={() => console.log('Added to wishlist')}
        >
          {Icon.heart}
        </button>
        <Image 
          src={image} 
          alt={name} 
          width={200} 
          height={200} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="mt-2">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-lg font-bold">${price}</span>
          <div className="flex gap-2">
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => console.log('Added to wishlist')}
            >
              {Icon.heart}
            </button>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={handleAddToCart}
            >
              {Icon.cart}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('CPU');

  return (
    <>
      <section className="navbar-section">
        <Navbar />
      </section>

      <div className="shop-container" id="shop">
        {/* Category Navigation */}
        <ShopNavigation selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        {/* Fetch and display products based on selected category */}
        <div className="mt-[2rem]">
          <ProductFetcher category={selectedCategory}>
            {(products) => (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">In Stock</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                      <ProductCard
                        key={product._id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                      />
                    ))}
                  </div>
                </section>
              </div>
            )}
          </ProductFetcher>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
