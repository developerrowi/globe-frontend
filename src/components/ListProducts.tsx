import { ProjectTableProps } from "../models/ProductTableProps";
import { useNavigate } from "react-router-dom";

interface ProductListDisplayProps extends ProjectTableProps {
  onDelete: (id: string) => void;
}

function ProductListDisplay({ products, onDelete }: ProductListDisplayProps) {
  const navigate = useNavigate();

  return (
    <ul className="space-y-4 p-4 max-w-3xl mx-auto">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-4 shadow-md rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
              <p className="text-gray-600 mt-1">{product.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate(`/products/edit/${product.id}`)}
                className="px-3 py-1 text-sm bg-blue-400 text-white rounded hover:bg-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductListDisplay;
