import { useEffect, useState } from "react"

export function Hook(){

//antes del retorno configuramos nuestras variables de estado
const [contador, setContador]=useState(0)

//programando el detector de ejecuciones
useEffect(function(){
    setContador(contador+1)
},[]) 


//FUNCION PARA DECIR QUE HACER CUAANDO LE DE CLIC AL BOTON
function incrementarCuenta(){
    setContador(contador+1)
}

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary "onClick={incrementarCuenta}>Click</button>
                    <h2>la cuenta va en:{contador} </h2>
                </div>
            </div>
        </div>
        </>
        )
        
    
        
        
}