import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div></div>
  ) : (
    <div className="opacity-50">Loading...</div>
  );
};

export default Product;
