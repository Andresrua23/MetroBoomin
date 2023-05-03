import { Carrusel } from '../Carrusel/Carrusel'

import './Shop.css'
export function Shop(){

  let productos=[{
        nombre:"COVER ART",
        precio:850.000 + "$",
        foto:"https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/tienda1.webp?alt=media&token=bd3f61a9-6edd-461b-8cb0-dd1aa85c1eaf",
        id:1

      },
      {
        nombre:"COVER ART",
        precio:900.000 + "$",
        foto:"https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/tienda2.jpg?alt=media&token=d451d41e-0bdd-413a-86ca-22f3c5da1949",
        id:2

        },
        {
          nombre:"COVER ART",
          precio:600.000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/tienda3.webp?alt=media&token=dd85f21d-a199-4297-9d19-ba9c4725dfbf",
          id:3


        },
        {
          nombre:"T-SHIRT ART",
          precio:500.000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/tienda4.webp?alt=media&token=2991989b-5cda-44a0-88ee-d805deb4ade5",
          id:4

        },
        {
          nombre:"COVER ART",
          precio:500.000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/tienda5.webp?alt=media&token=0132d855-d24b-4889-aaa0-d8c3fa8859db",
          id:5


        },
        {
          nombre:"PHOTO ART",
          precio:700.000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/tienda6.jpg?alt=media&token=af946791-33b0-4e60-ac77-cf20f6accec4",
          id:6

        }

        ]
            return(
                <>
                <Carrusel/>
                   
                  <div>
                    <h1 className='text-center'>Tienda</h1>
                    <div className="row row-cols1- row-cols-md-3  g-1 mt-1 elemento">
                      {
                        productos.map(function(producto){
                          return(
                            <div key={producto.id}>
                              <div className="col">
                              <div className="card h-100 w-75 shadow mx-auto g-1">
                              <img src={producto.foto} alt="fotoShop" className="img-fluid w-100 bg-dark" />
                              <h3 className="text-center fw-bold">{producto.nombre}</h3>
                              <h4 className=" text-center">{producto.descripcion}</h4>
                              <h4 className="mt-1 text-center">{producto.precio}</h4>
                              <button type='submit' className='btn-sm'>Añadir</button>
                          
                            </div>

                              </div>

                            </div>
                          )
                        })
                      }

                    </div>
                  </div>
          
            
            </>
        )
    }