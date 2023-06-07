import { useState, useEffect } from "react"


export function Carga() {
    const [estaCargando, setEstaCargando] = useState(true)
    const [tiempo, setTiempo] = useState(0)

    useEffect(function () {
        if (tiempo>0) {
            setEstaCargando(false)
        }
        setEstaCargando(true)
    }, [tiempo])

    setTimeout(function () {
        setTiempo(1)
    }, 5000)

    if (estaCargando) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img src="../../src/assets/img/metro.gif" alt=""
                                className="img-fluid mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h4>YA CARGAMOS TODO</h4>
            </>
        )
    }
}