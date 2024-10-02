"use client";
import styles from "@/app/styles/tema.module.css";
import formulario from "@/app/temario/formulario/donador.json"
import Cuadro from "@/app/temario/funciones/ctexto.js"
import Bot from "@/app/temario/funciones/checkbox.js"
import Libro from "@/app/temario/formulario/libro.json"
export function persona(){
    return(
        <div>
            {formulario.cuadrotx.map((preg,i)=>(
                <div className={styles.rellenar}>
                    <div className='tex'>{preg}</div>
                    <Cuadro></Cuadro>
                </div>
            ))}
     
            {formulario.tes.map((pregunta,i)=>(
                <div className={styles.precionar} >
                    <div className="titulo1">{pregunta.id}</div>
                    <div className={styles.rellenar}>
                        {formulario.tes[i].title.map((title)=>(
                            <div>
                                <Bot></Bot>
                                {title}
                            </div>
                                 
                        ))}
                    </div>
                </div>    
            ))}
        </div>
    )
}
export function libro(){
    return(
        <div>
            {Libro.cuadrotx.map((preg)=>(
            <div className={styles.rellenar}>
                <div className='tex'>{preg}</div>
                <Cuadro></Cuadro>
            </div>
            ))}
            {Libro.tes.map((pregunta,i)=>(
                <div className={styles.precionar}>
                    <div className="titulo1">{pregunta.id}</div>
                    <div className={styles.rellenar}>
                        {Libro.tes[i].title.map((title)=>(
                            <div>
                                <Bot></Bot>
                                {title}
                            </div>     
                        ))}
                    </div>
                </div>   
            ))}
        </div>
    )
}