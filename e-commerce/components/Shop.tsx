"use client"
import React, { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';

interface ShopNavigationProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

export const ShopNavigation = ({ onCategoryChange, selectedCategory }: ShopNavigationProps) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Fetch categories from Sanity
    const fetchCategories = async () => {
      try {
        const result = await client.fetch(`
          *[_type == "category"] {
            name
          }
        `);
        const categoryNames = result.map((cat: { name: string }) => cat.name);
        setCategories(categoryNames);
        
        // Set initial category if none selected
        if (!selectedCategory && categoryNames.length > 0) {
          onCategoryChange(categoryNames[0]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [onCategoryChange, selectedCategory]);  // Add dependencies to re-run if necessary

  return (
    <nav className="mb-8">
      <ul className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)}
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
