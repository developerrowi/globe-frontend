import { create } from "zustand";
import { Product } from "../models/Product";

interface ProductStoreState {
  products: Product[];
  fetchProducts: (searchQuery?: string) => Promise<void>;
}

export const ProjectStore = create<ProductStoreState>((set) => ({
  products: [],

  fetchProducts: async (searchQuery?: string) => {
    var response: any
    if(searchQuery) {
      response = await fetch("http://localhost:3000/api/products/" + searchQuery, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
    } else {
      response = await fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
    }
    
    const result = await response.json();
    console.log(result)
    set({ products: result });
  },

  
}));
