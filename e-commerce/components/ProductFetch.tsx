// components/ProductFetcher.tsx
import { useState, useEffect } from 'react';
import { client } from '../sanity/lib/client';

export const fetchProducts = async (category: string) => {
  // Updated query to match your schema
  const products = await client.fetch(`
    *[_type == "product" && category->name == $category]{
      _id,
      name,
      price,
      "image": image.asset->url,
      "category": category->name,
      inStock
    }
  `, { category });
  
  return products;
};

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface ProductFetcherProps {
  category: string;
  children: (products: Product[]) => JSX.Element;
}

const ProductFetcher = ({ category, children }: ProductFetcherProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedProducts = await fetchProducts(category);
        setProducts(fetchedProducts);
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', err);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [category]);

  if (isLoading) {
    return <>{children([])}</>; // Or return a loading component
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <>{children(products)}</>;
};

export default ProductFetcher;