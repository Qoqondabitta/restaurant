import { create } from "zustand";

export const addProductToStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please Fill In All the Fields" };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data] }));
    return {
      success: true,
      message: "New Product has been added Alhamdulillah",
    };
  },
  mapProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
  },
  deleteProduct: async (id) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      products: state.products.filter((product) => product._id != id),
    }));
    return { success: true, message: "Product has succesfully been deleted" };
  },
  editProduct: async (id, changedProduct) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.map((product) =>
        product._id == id ? data.data : product
      ),
    }));
    return { success: true, message: "Product has succesfully been updated" };
  },
}));
