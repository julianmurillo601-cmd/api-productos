import type { Product } from "../models/Products.ts";

export const products: Product[] = [
 {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 100.999,
    stock: 16,
    category: "computers",
    active: true,
 },
  {
    id: 2,
    name: "Iphone 18",
    price: 500.999,
    stock: 11,
    category: "electronics" ,
    active: true,
  },
  {
    id: 3,
    name: "Headphones JBL WABE",
    price: 200.999,
    stock: 6,
    category: "audio",
    active: true,
  },
];
let nextProductId = Math.max(...products.map(product => product.id)) + 1;

export function generateProductId(): number {
    const id = nextProductId;
    nextProductId++;
    return id;
}
