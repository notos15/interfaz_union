"use client";
import styles from "@/app/styles/tema.module.css";
import formulario from "@/app/temario/formulario/donador.json"
import Cuadro from "@/app/temario/funciones/ctexto.js"
import Bot from "@/app/temario/funciones/checkbox.js"
import Libro from "@/app/temario/formulario/libro.json"
/*{styles.precionar}{styles.rellenar}*/ 
export function persona(){
    return(
<div>
        {formulario.tes.map((pregunta, i) => (
          <div className={styles.precionar} key={i}>
            <div className="titulo1">{pregunta.pregunta}</div> {/* Mostrar la pregunta */}
            <div className={styles.rellenar}>
              {pregunta.opciones.map((opcion, j) => (
                <label key={j}>
                  <input type={pregunta.tipo} name={pregunta.id} value={opcion} />
                  {opcion}
                </label>
              ))}
            </div>
          </div>
        ))}
        {formulario.cuadrotx.map((preg) => (
          <div className={styles.rellenar} >
            <div className='tex'>{preg.id}</div>
            <Cuadro dato={preg.gris}></Cuadro>
          </div>
        ))}
      </div>
    );
  }
export function libro(){
    return(
        <div>
            {Libro.cuadrotx.map((preg)=>(
            <div className={styles.rellenar}>
                <div className='tex'>{preg.id}</div>
                <Cuadro dato={preg.gris}></Cuadro>
            </div>
            ))}
            {Libro.tes.map((pregunta, i) => (
                <div className={styles.precionar} key={i}>
                    <div className="titulo1">{pregunta.pregunta}</div> {/* Mostrar la pregunta */}
                    <div className={styles.rellenar}>
                        {pregunta.opciones.map((opcion, j) => (
                            <label key={j}>
                                <input type={pregunta.tipo} name={pregunta.id} value={opcion} />
                                {opcion}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}