import styles from "@/app/styles/globals.css";
import Link from "next/link";
export default function Home()  {
  return (
    <div >
      <h1 className="titulo">DLP</h1>
      <div className="container">
        <div className="botonera">
          <div className="btn">Escanear</div>
          <Link href={"/temario"}style={{ textDecoration: 'none' }}><div className="btn">Donar</div></Link>
          
          <div className="btn">Repositorio</div>
          <div className="btn">Terminos y condiciones</div>
        </div>
      </div>
    </div>
  );
}
/*<div></div> */