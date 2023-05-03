import './Fans.css'
import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react'

export function Fans() {

    useEffect(function () {
        const wow = new WOW()
    }, [])

    return (
        <>
            <div className="fans mt-5">
                <form>
                    <h4 className='text-center'>METRO BOOMIN FANS</h4>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1" required><i className="bi bi-person-circle"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Nombre " />
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1" required> @</span>
                                    <input type="text" className="form-control" placeholder="Correo cliente" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1" required><i class="bi bi-phone-fill"></i></span>
                                    <input type="text" className="form-control" placeholder="Telefono Cliente" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i class="bi bi-calendar-check-fill"></i></span>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mx-auto'>Enviar</button>



                </form>
                <div className='fans2'>
                    <form>
                        <h4 className="my-5 text-center">METRO BOOMIN WORLD</h4>
                        <div className="mb-3 mt-5 ">
                            <label for="pregunta1" className="form-labe text-white ">¿Quien es Metro Boomin?</label>
                            <select className="form-select" id="pregunta1" required>
                                <option value="">Seleccione una respuesta</option>
                                <option value="a">Profesor</option>
                                <option value="b">Mago</option>
                                <option value="c">El maestro del HipHop</option>
                            </select>
                            <div className="invalid-feedback">
                                Elige una respuesta.
                            </div>
                        </div>
                        <br />
                        <div className="mb-3 ">
                            <label for="pregunta1" className="form-label text-white">¿Cuando nacio?</label>
                            <select className="form-select" id="pregunta1" required>
                                <option value="">Elige tu respuesta</option>
                                <option value="a">4 de julio, 1992 </option>
                                <option value="b">4 de julio, 1985  </option>
                                <option value="c">4 de julio, 1991 </option>
                            </select>
                            <div className="invalid-feedback">
                                Elige una respuesta.
                            </div>
                        </div>
                        <br />
                        <div className="mb-3">
                            <label for="pregunta1" className="form-label text-white">¿Cuál canción lo hizo famoso?</label>
                            <select className="form-select" id="pregunta1" required>
                                <option value="">Elige tu respuesta</option>
                                <option value="a">Bad and Bounjee</option>
                                <option value="b">Flexx</option>
                                <option value="c">Space cadet</option>
                            </select>
                            <div className="invalid-feedback">
                                Elige una respuesta.
                            </div>
                        </div>

                        <br />
                        <div className="mb-3">
                            <label for="pregunta1" className="form-label text-white">¿Cuál es el nombre real de METRO</label>
                            <select className="form-select" id="pregunta1" required>
                                <option value="">Elige una respuesta</option>
                                <option value="a">Leland Tyler Wayne</option>
                                <option value="b">Jimmy Butler</option>
                                <option value="c">Jermaine Lamarr Cole</option>
                            </select>
                            <div className="invalid-feedback">
                                Elige una respuesta.
                            </div>
                        </div>

                        <br />
                        <div className="mb-3">
                            <label for="pregunta1" className="form-label text-white">¿Cuál es el patrimonio neto de METRO?</label>
                            <select className="form-select" id="pregunta1" required>
                                <option value="">Elige tu respuesta</option>
                                <option value="a">8 millones</option>
                                <option value="b">3 millones</option>
                                <option value="c">2 millones</option>
                            </select>
                            <div className="invalid-feedback">
                                Elige una respuesta.
                            </div>
                        </div>

                        <button type="submit" className='btn btn-primary mx-auto'>Enviar</button>

                    </form>
                </div>

            </div>






        </>
    )
}