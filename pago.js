// Pago.js (componente de pago)
import React, { useState } from 'react';

const Pago = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    tarjeta: '',
  });
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    let errorTemp = {};
    if (!formData.nombre) errorTemp.nombre = 'El nombre es obligatorio';
    if (!formData.direccion) errorTemp.direccion = 'La dirección es obligatoria';
    if (!formData.tarjeta) errorTemp.tarjeta = 'El número de tarjeta es obligatorio';
    return errorTemp;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validarFormulario();
    if (Object.keys(errores).length === 0) {
      alert('Pago exitoso');
    } else {
      setErrores(errores);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Información de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
          {errores.direccion && <p style={{ color: 'red' }}>{errores.direccion}</p>}
        </div>
        <div>
          <label>Número de tarjeta:</label>
          <input
            type="text"
            name="tarjeta"
            value={formData.tarjeta}
            onChange={handleChange}
          />
          {errores.tarjeta && <p style={{ color: 'red' }}>{errores.tarjeta}</p>}
        </div>
        <button type="submit">Finalizar compra</button>
      </form>
    </div>
  );
};

export default Pago;
