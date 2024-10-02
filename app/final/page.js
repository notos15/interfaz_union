"use client";
import glo from "@/app/styles/globals.css";
import Link from "next/link";
import Image from 'next/image';
export default function Home() {
  return (
    <div>
      <h1 className="titulo">Donar Libros</h1>
      <div className="cuestionario">
        <div className="tex">Gracias por donar un libro</div>
        <div className="tex">Ahora por favor imprima y pegue el siguiente codigo QR</div>
      </div>
      <div className=".imagen_contenedor">
        < Image 
          display= "flex"
          justify-content= "center" 
          align-items="center"
          src="/miqr.png"
          alt="codigo qr"
          width={300}
          height={300}
        />  
      </div>
      <div className='contenedor1'>
        <div>
            <Link href={"/"}style={{ textDecoration: 'none' }}>
              <div className="btn">Pagina principal</div>
            </Link>
        </div>
      </div>
    </div>
    
  );
}
