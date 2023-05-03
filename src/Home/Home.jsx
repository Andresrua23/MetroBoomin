import './Home.css'
import { History } from '../History/History'
import { Footer } from '../Footer/Footer'
import 'animate.css'

export function Home() {
    return (
        <>
            <section className="banner">

            </section>
            <section>
                <div className="container my-5 animate__animated animate__fadeIn">
                    <div className="row">
                        <div className="col-12 col-md-4 animate__animated animate__fadeIn">
                            <h4>METRO BOOMIN</h4>
                            <p>
                                Metro Boomin (también conocido como Young Metro o simplemente Metro) es un productor, ejecutivo de discos, compositor y DJ estadounidense. Una parte ralmente importante de la musica urbana actual. Especializado en el subgénero del hip hop y trap. Metro utiliza una mezcla distintiva de bajo pesado, percusión sintética y oscuras melodías góticas. Metro Boomin apenas se aleja del hip hop, aunque ha remezclado canciones pop.
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/boomin.jpg?alt=media&token=22c425cb-793d-45d0-8c79-de90f586e511" alt="foto" className='img-fluid w-100' />
                            </div>
                        <div className="col-12 col-md-4 animate__animated animate__fadeIn">
                            <img src="https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/met.jpg?alt=media&token=c594b964-316a-4762-bbc7-b6596beec3d8" alt="foto" className='img-fluid w-100' />
                            <p>En enero de 2018, Metro apareció en una campaña de Gap con SZA junto con un remix de producción propia de Hold Me Now. El remix fue lanzado a plataformas digitales el mismo día de la campaña.
                                En abril de 2018, Metro anunció su retiro del rap en su cuenta de Instagram, cambiando su biografía por "Jubilado productor/DJ".Sin embargo, desde entonces ha obtenido créditos de producción en el álbum Queen de Nicki Minaj, así como en el de Lil Wayne Tha Carter V, que debutó en el top 5 del Billboard 200.
                                El 26 de octubre de 2018, aparecieron varias vallas publicitarias en Atlanta y Nueva York que anunciaban a Metro Boomin como una "persona desaparecida".Más tarde se reveló que era un teaser para su debut en el proyecto Not All Heroes Wear Capes, en el que había estado trabajando desde 2015. El álbum fue lanzado el 2 de noviembre y tuvo apariciones de Travis Scott, Swae Lee, 21 Savage, Wizkid, Young Thug, Gucci Mane, Gunna, Drake y más.</p>
                        </div>
                        <div className="col-12 col-md-4 animate__animated animate__fadeIn">
                            <p><p>Comenzó a hacer ritmos en el séptimo grado a la edad de 13 años. Esto sucedió cuando su madre le compró una computadora portátil y recibió una copia del software de producción musical FruityLoops.En la escuela secundaria, Metro producía cinco ritmos al día. Inicialmente, Metro quería rapear, y comenzó a hacer ritmos para que pudiera tener música para rapear.Sin embargo, eventualmente dirigió toda su atención hacia la producción de hip hop.A medida que continuaba perfeccionando sus habilidades de producción, mientras aún estaba en la escuela secundaria, comenzó a utilizar las plataformas de medios sociales en línea, como Twitter, para establecer contactos con artistas de rap más establecidos, así como para las presentaciones de posibles ubicaciones musicales.10</p>
                        </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/metr.jpg?alt=media&token=c8dc79f5-b4a8-4644-b912-6f80ed333278" alt="foto" className='img-fluid w-100' />
                            </div>

                    </div>
                </div>
            </section>
            <section className="banner2"></section>
            <section className='my-5'>
                <History />
            </section>
            <section className='my-5'>
                <Footer />
            </section>
                
        </>
    )
}