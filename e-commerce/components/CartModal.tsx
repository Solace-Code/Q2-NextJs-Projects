// components/CartModal.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

const CartModal = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();

  if (!isCartOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ✕
          </button>
        </div>
        
        <div className="flex-1 overflow-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 border-b pb-4">
                  <div className="w-20 h-20 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item._id, Math.max(0, item.quantity - 1))}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;