// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../sanity/lib/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;

  if (!category || typeof category !== 'string') {
    return res.status(400).json({ error: 'Category is required' });
  }

  try {
    const query = `
      *[_type == "product" && category->name == $category]{
        _id,
        name,
        price,
        "image": image.asset->url,
        "category": category->name,
        inStock
      }
    `;

    const products = await client.fetch(query, { category });
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}