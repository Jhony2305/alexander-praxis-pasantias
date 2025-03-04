import React  from 'react';
import { Link } from 'react-router-dom';


import instructor1 from '../../assets/images/instructors/9.png'
import instructor2 from '../../assets/images/instructors/10.png'
import instructor3 from '../../assets/images/instructors/11.png'
import instructor4 from '../../assets/images/instructors/12.png'
import instructor5 from '../../assets/images/instructors/mision1.PNG'

const CourseDetailsMain = (props) => {
    const { eventDate, eventStartTime, eventEndTime, eventLocation, eventCost, eventHost, eventTotalSlot, eventBookedSlot, eventContactNo } = props;

    return (
        <div className="back__course__page_grid react-courses__single-page react-events__single-page pb---40 pt---120">
            <div className="container pb---70">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="events-details"style={{ textAlign: 'justify' }}>
                            <h3>Misión</h3>
                            <p>Somos un centro educativo que forma hombres y mujeres, desarrollando todas las competencias laborales y científicas a través de la capacitación y entrenamiento práctico con la finalidad de insertar a las personas al mercado laboral o al mundo del emprendimiento.</p>
                            <h3>Visión</h3>
                            <p>Ser reconocidos por la sociedad ecuatoriana e internacional como la mejor opción en entrenamiento y capacitación continua contribuyendo al desarrollo de las personas</p>
                            <h3>Principios</h3>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>Cogobierno:</span> Entendido como la dirección compartida por parte de los diferentes sectores de la comunidad.
                            </p>
                                <p>
                                   <span style={{ fontWeight: 'bold' }}>Igualdad de Oportunidades:</span> Consiste en garantizar a las personas que tengan los mismos derechos y posibilidades de acceso, permanencia, movilidad y egreso.
                                </p>
                                 <p>
                                    <span style={{ fontWeight: 'bold' }}>Autonomía responsable:</span> Asegurará el ejercicio del principio de autonomía responsable requerida para impulsar el desarrollo de su comunidad y el cumplimiento de su misión y visión.
                                    </p>
                                       <p>
                                         <span style={{ fontWeight: 'bold' }}>Calidad:</span> Se regirá por los máximos niveles de excelencia e innovación en sus actividades y programas académicos a fin de asegurar el mejoramiento continuo en todos sus niveles de formación, educación continua, capacitación e investigación.
                                        </p>


                            <div className="videos"><iframe width="660" height="315" src="https://www.youtube.com/embed/f-BnCysIkCo?si=y0Uoojez9CWW_LL_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

                            <ul className="mata-tags">
                                
                                <li><Link to="#">Educación De Calidad</Link></li>
                                <li><Link to="#">Formación De Futuro</Link></li>
                                
                            </ul>

                            <ul className="others-instructors">
                            <li><h3>Personal Administrativo</h3></li>
                            <li>
                                <span><img src={instructor1} alt="user" /></span>
                                <span>Jorge Vallejos <em>Gerente</em></span>
                            </li>
                            <li>
                                <span><img src={instructor2} alt="user" /></span>
                                <span>Hanson Deck <em>Coordinador</em></span>
                            </li>
                            <li>
                                <span><img src={instructor3} alt="user" /></span>
                                <span>Dianne Ameter <em>Contabilidad</em></span>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 md-mt-60">
                        <div className="react-sidebar react-back-course2 ml----30">                                                                        
                            
                            <div>
                            
                                <img src={instructor5} alt="Logo de Praxis" style={{ width: "450px", height: "auto" }} />
                            </div>                                
                        </div>
                        <div className="react-sidebar react-back-course2 ml----30">                                                                        
                        <p> <br /> </p>
                            <div>
                            
                                <img src={instructor5} alt="Logo de Praxis" style={{ width: "450px", height: "auto" }} />
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default CourseDetailsMain;