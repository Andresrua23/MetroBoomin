export function Carrusel() {
    return (
        <>

            <div id="carouselExampleIndicators" className="carousel slide animate__animated animate__pulse">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/carrusel.jpg?alt=media&token=c9e4b0ce-b394-448a-b3ef-09de1d586938" className="d-block w-100" alt="imagencity" height="600px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/carrusel2.jpg?alt=media&token=438b22ed-510b-4c24-ab45-a6dedb62a13e" className="d-block w-100" alt="imagencar" height="600px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spoty-d792b.appspot.com/o/carrusel3.webp?alt=media&token=b78db114-e12b-4171-99bc-b55812fbffd8" className="d-block w-100" alt="imagenstore" height="600px"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}