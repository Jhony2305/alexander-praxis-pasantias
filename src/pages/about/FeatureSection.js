import React from 'react';

import { Link } from 'react-router-dom';


import icon1 from '../../assets/images/topics/icon.png'
import icon2 from '../../assets/images/topics/icon2.png'
import icon3 from '../../assets/images/topics/icon3.png'

const Feature = () => {

    return (
        <div className="react_populars_topics react_populars_topics2 react_populars_topics_about pb---80">
            <div className="react__title__section react__title__section-all" >
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.5s"> Historia</h2>
                    </div>                                
                </div>                            
            </div>
            <div className="container">      
                <div className="row pt---30">
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.3s">
                        <div className="item__inner" style={{ backgroundColor: "#ea9e2a", padding: "20px", borderRadius: "10px" }}>                                    
                            <div className="icon">
                                <img src={icon2} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title" ><a href="">Acerca de Praxis</a></h3>
                                <p style={{ textAlign: "justify", margin: "0 auto", maxWidth: "800px", color: "white",  fontSize: "18px" }}>
                                  En el año 2015, se inauguró Praxis, un centro educativo promovido por diversas entidades representativas de la sociedad de Quito y respaldado por la Universidad de los Hemisferios y la Cámara Artesanal del Pichincha. El propósito de este centro es ofrecer tanto modalidades presenciales como no presenciales para facilitar el acceso a la enseñanza técnica y tecnológica a todas las personas que desean cursar dichos programas, independientemente de sus circunstancias personales, laborales, residenciales u otras.
                                </p>

                            </div>  
                                                              
                        </div>
                        
                    </div>
                    <div class="col-md-4 wow animate__fadeInUp" data-wow-duration="0.5s">
                        <div class="item__inner"style={{ backgroundColor: "#ea9e2a", padding: "20px", borderRadius: "10px" }}>                                    
                            <div class="icon">
                                <img src={icon2} alt="Icon image" />
                            </div>
                            <div class="react-content">
                                <h3 class="react-title"><Link to="/contact">Sucursales</Link></h3>
                                <p style={{ textAlign: "justify", margin: "0 auto", maxWidth: "800px", color: "white",  fontSize: "18px"  }}>En la actualidad Praxis cuenta con sucursales en Quito y Guayaquil facilitando la educación a cerca de 1000 individuos. Enfoncados en una metodología práctica y con un alto sentido de resposabilidad hacia sus estudiantes.<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></p>
                            </div>                                    
                        </div>


                    </div>
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.5s">
                        <div className="item__inner"style={{ backgroundColor: "#ea9e2a", padding: "20px", borderRadius: "10px" }}>
        
                             <div className="react-content">
                                <a href="/documents/ResolucionOCC.pdf" target="_blank" rel="noopener noreferrer">
                                  Ver PDF en otra pestaña
                               </a>

                                    <iframe 
                                        src="/documents/ResolucionOCC.pdf" 
                                           style={{ width: "100%", height: "430px", border: "none" }} 
                                             title="Documento PDF">
                                    </iframe>
        </div>
    </div>
</div>
                         
                </div>
                
            </div>
            
        </div>
    );
}

export default Feature;