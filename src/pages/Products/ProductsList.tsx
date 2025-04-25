import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductListDisplay from "../../components/ListProducts";
import { Product } from "models/Product";
import { useAuthStore } from "../../store/AuthStore";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  const fetchProducts = async (query: string) => {
    try {
      const url = `${API_BASE_URL}/products/`;

      const response = await axios.get<Product[]>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      alert("Error fetching products, please contact admin");
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const url = `${API_BASE_URL}/products/${id}`;
      await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      alert("Error deleting product, please contact admin");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts(search);
  }, [search]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <button
          onClick={() => navigate("/products/create")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow"
        >
          + Add Product
        </button>
      </div>

      <ProductListDisplay products={products} onDelete={handleDelete} />
    </div>
  );
};

export default ProductList;
