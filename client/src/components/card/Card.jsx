import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import Swal from 'sweetalert2'

const Card = ({ id_Product, name, image, price }) => {
  const dispatch = useDispatch();

  // Función para manejar agregar al carrito
  const handleAddToCart = () => {
    const productToAdd = {
      id_Product,
      name,
      image,
      price,
      quantity: 1 // Puedes ajustar esto si necesitas iniciar con una cantidad diferente
    };
    dispatch(addToCart(productToAdd));
    Swal.fire("Producto agregado al carrito!");
  };

  return (
    <div key={id_Product} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      <Link to={`/detail/${id_Product}`}>
        <img className="p-8 rounded-t-lg max-h-60" src={image} alt={name} />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/detail/${id_Product}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center">
            {/* Añadiendo las estrellitas */}
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.971a1 1 0 00.95.674h4.173c.969 0 1.37 1.24.588 1.812l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.971c.3.921-.755 1.683-1.539 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.565-1.838-.197-1.539-1.118l1.286-3.971a1 1 0 00-.364-1.118l-3.36-2.44c-.782-.572-.381-1.812.588-1.812h4.173a1 1 0 00.951-.674l1.286-3.971z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 ml-3">{`${4} Reviews`}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
          <button onClick={handleAddToCart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

