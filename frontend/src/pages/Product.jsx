import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

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
    <div className="border-t border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] ">
            {productData.image.map((img, index) => (
              <img
                onClick={() => setImage(img)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:opacity-70"
                key={index}
                src={img}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Details */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 shadow-lg bg-gray-100 hover:bg-gray-200 ${
                    item === size
                      ? "bg-gray-200 border-black"
                      : "border-transparent"
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 border-gray-300 border-t" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available for this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Product Description and Reviews */}

      <div className="mt-20">
        <div className="flex border-b">
          <button className="px-5 py-3 text-sm font-bold border-b-2 border-black bg-white">
            Description
          </button>
          <button className="px-5 py-3 text-sm font-bold border-b-2 border-black/30 bg-white">
            Reviews (122)
          </button>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg shadow-md px-6 py-6 text-sm text-gray-500 bg-white mt-2">
          <p>
            An e-commerce website is an online platform where buyers and sellers
            can interact and conduct transactions for goods and services. It
            provides a virtual storefront for businesses to showcase their
            products, and it offers various features to enhance the shopping
            experience, such as product catalogs, shopping carts, and secure
            payment gateways.
          </p>
          <p>
            Ecommerce websites typically feature a user-friendly interface,
            allowing customers to easily browse and search for products. They
            may also include customer reviews and ratings, helping shoppers make
            informed decisions.
          </p>
        </div>
      </div>

      {/* Related Products */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-50">Loading...</div>
  );
};

export default Product;
