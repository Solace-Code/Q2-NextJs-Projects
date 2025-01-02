import { defineType } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(500),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    },
  ],
});
