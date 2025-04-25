// src/AppRouter.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./pages/Products/ProductsList";
import SignupPage from "./pages/Register";
import LoginPage from "./pages/Login";
import AddProduct from "./pages/Products/AddProducts";
import EditProduct from "./pages/Products/EditProducts";

import Header from "./components/Header";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products" element={<ProjectList />} />
        <Route path="/" element={<ProjectList />} />
        <Route path="*" element={<ProjectList />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products/create" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />


      </Routes>
    </Router>
  );
};

export default AppRouter;
