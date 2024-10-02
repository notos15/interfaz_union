"use client";
import styles from "@/app/styles/tema.module.css";
import glo from "@/app/styles/globals.css";
import Link from "next/link";
import { persona , libro } from "./funciones/datos.js";
//Donar Libros
export default function Home() {
  return (
  <div >
    <h1 className="titulo">Donar Libros</h1>
    <div className="cuestionario">
      <h1 className="titulo1">Informacion del Usuario</h1>
      <div>{persona()}</div>
    </div>

    <div className="cuestionario">
      <h1 className="titulo1">Informacion del Libro</h1>
      <div>{libro()}</div>
        
    </div>

    <div className={styles.footer}>
      
      <Link href={"/"}style={{ textDecoration: 'none' }}>
        <div className='btn'>Atras</div>
        </Link>
      
      <Link href={"/final"}style={{ textDecoration: 'none' }}>
        <div className='btn'>Guardar</div>
      </Link>
    </div>
  </div>
  )
}
