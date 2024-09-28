import React from "react";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <li>
      <a href="#" className="group block overflow-hidden rounded-md">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />
        <div className="relative bg-lightYellow pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {product.name}
          </h3>
          <p className="mt-2">
            <span className="tracking-wider text-gray-900">
              {product.price}
            </span>
          </p>
          <div
            onClick={() => handleAddToCart(product)}
            className="py-2 border mt-2 flex justify-center items-center bg-transparent cursor-pointer transition-all ease-in-out duration-300 hover:text-black hover:bg-yellow-300 hover:rounded-xl"
          >
            <p>Add to Cart</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProductCard;
