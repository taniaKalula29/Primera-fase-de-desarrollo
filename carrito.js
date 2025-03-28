// Carrito.js (componente del carrito)
import React, { useState, useEffect } from 'react';

const Carrito = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  // Función para agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setProductosEnCarrito(prev => [...prev, producto]);
  };

  // Función para eliminar producto
  const eliminarDelCarrito = (id) => {
    setProductosEnCarrito(prev => prev.filter(producto => producto.id !== id));
  };

  // Función para actualizar cantidad de productos
  const actualizarCantidad = (id, cantidad) => {
    setProductosEnCarrito(prev =>
      prev.map(producto =>
        producto.id === id ? { ...producto, cantidad } : producto
      )
    );
  };

  const total = productosEnCarrito.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0);

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {productosEnCarrito.map((producto) => (
          <li key={producto.id}>
            <span>{producto.nombre} - ${producto.precio}</span>
            <input
              type="number"
              value={producto.cantidad}
              onChange={(e) => actualizarCantidad(producto.id, parseInt(e.target.value))}
            />
            <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button onClick={() => alert('Proceder al pago')}>Proceder al pago</button>
    </div>
  );
};

export default Carrito;
