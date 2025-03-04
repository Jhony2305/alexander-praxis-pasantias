
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logos/footer-logo.png';

const FooterTwo = (props) => {
    const { footerLogo, footerClass, ctaSubtitle, ctaTitle, ctaBtn } = props;
    return (
        <>
        <footer id="react-footer" className={footerClass ? footerClass : 'react-footer home-main'}>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 md-mb-30">
                            <div className="footer-widget footer-widget-1">
                                <div className="footer-logo white">
                                    <Link to="/" className="logo-text"><img src={footerLogo ? footerLogo : Logo} alt="Footer Logo" /></Link>
                                </div>
                                <h5 className="footer-subtitle">Praxis <br/>
                               Avalados por <br/>Universidad Hemisferios<br/> Camara Artesanal Pichincha</h5>
                                <ul className="footer-address">
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><a href="tel:+(593)992382355"> +(593) 992382355 </a></li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><a href="mailto:jhonnyddiaz1995@gmail.com"> info@gmail.com </a></li>
                                </ul>                               
                            </div>
                        </div>
                       
                        <div className="col-lg-3 md-mb-30">
                            <div className="footer-widget footer-widget-2">
                                <h3 className="footer-title">Nosotros</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to="/about">Historia</Link></li>
                                        <li><Link to="/course">Cursos</Link></li>
                                        <li><Link to="#">Asesores</Link></li>
                                        <li><Link to="/instructor">Misión Visión</Link></li>
                                        <li><Link to="/contact">Contáctanos</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 md-mb-30">
                            <div className="footer-widget footer-widget-3">
                                <h3 className="footer-title">Enlaces Útiles </h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to="https://virtual.praxis.com.ec/" target="_blank">Moodle Praxis</Link></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-widget footer-widget-4">
                                <h3 className="footer-title">Sedes</h3> 
                                <div className="footer3__form">
                                <p>
                                  Sede Quito <br /> Dirección <br />
                                   <a href="https://maps.app.goo.gl/e2Gw7wVtZCmHNdXa6" target="_blank">Ver dirección en Google Maps</a>
                                </p>
                                <p>
                                  Sede Guayaquill  <br /> Dirección <br />
                                   <a href="https://maps.app.goo.gl/47SR95iXRjKHF97s6" target="_blank">Ver dirección en Google Maps</a>
                                </p>
                                    
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">  
                <div className="container">                  
                    <div className="react-copy-left">© 2025 <Link to="/">Praxis Jhony.</Link>  Todos los derechos reservados</div>
                    <div className="react-copy-right">
                        <ul className="social-links">
                            <li className="follow">Follow us</li>
                            <li><a href="https://www.facebook.com/praxisEC" target="_blank" rel="noopener noreferrer"> <span aria-hidden="true" className="social_facebook"></span> </a></li>
                            <li><Link to="#"><span aria-hidden="true" className="social_linkedin"></span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
);
}

export default FooterTwo;