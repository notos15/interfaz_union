"use client";
import React, { useState } from 'react';
const Cuadro=()=>{
    const [nombre, setNombre] = useState("");
    return(
        <input
            type="text"
            value={nombre}
            placeholder="Escribe aquí "
            onChange={(e) => setNombre(e.target.value)}
        />
    );
}
export default Cuadro;