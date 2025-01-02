"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { client } from '../sanity/lib/client';

interface ShopNavigationProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

export const ShopNavigation = ({ onCategoryChange, selectedCategory }: ShopNavigationProps) => {
  const [categories, setCategories] = useState<string[]>([]);

  // useCallback ensures that this function is not recreated on every render
  const fetchCategories = useCallback(async () => {
    const result = await client.fetch(`
      *[_type == "category"] {
        name
      }
    `);
    const categoryNames = result.map((cat: { name: string }) => cat.name);
    setCategories(categoryNames);

    // Set initial category if none selected
    if (!selectedCategory && categoryNames.length > 0) {
      onCategoryChange(categoryNames[0]);  // Call onCategoryChange to update the selectedCategory in the parent
    }
  }, [selectedCategory, onCategoryChange]);

  useEffect(() => {
    fetchCategories(); // Run the fetchCategories function
  }, [fetchCategories]); // Add fetchCategories to the dependency array

  return (
    <nav className="mb-8">
      <ul className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)} // Call onCategoryChange to update the category
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
