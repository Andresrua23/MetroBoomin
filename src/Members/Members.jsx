export function Members() {

    let integrantes = [
        {
            nombre: "Young Thug",
            rol: "Cantante",
            foto: "https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/thug.jpeg?alt=media&token=32b80cd1-b7ab-47db-b97a-dde0df8adaca",
            nacimiento: "Atlanta-1991",
            id: 1
        },
        {
            nombre: "Future",
            rol: "Cantante",
            foto: "https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/future.jpg?alt=media&token=93ceb037-f2b1-4f3b-85e3-58acff686b20",
            nacimiento: "Atlanta-1983",
            id: 2
        },
        {
            nombre: "21 Savage",
            rol: "Cantante",
            foto: "https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/21.jpg?alt=media&token=18aad218-d41a-4b2f-bee1-3f3862378307",
            nacimiento: "Atlanta-1992",
            id: 3
        },
        {
            nombre: "Migos",
            rol: "Cantante",
            foto: "https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/mig.jpg?alt=media&token=b3d1cfa9-36d8-4db5-9dc1-7209c3a3efdb",
            nacimiento: "Atlanta-1991",
            id: 4
        }
    ]


    //se mapean los objetos

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-3 animate__animated animate__zoomIn">

                {
                    integrantes.map(function (integrante) {
                        return (
                            <div key={integrante.id}>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <h3 className="text-center fw-bold"> Nombre: {integrante.nombre} </h3>
                                        <h5 className="text-center fw-bold">Nacimiento: {integrante.nacimiento} </h5>
                                        <img src={integrante.foto} alt="" className="img-fluid w-100" />
                                        <h4 className="text-center fw-bold">Rol: {integrante.rol} </h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}