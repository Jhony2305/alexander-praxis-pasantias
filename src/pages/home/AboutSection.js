import { Link } from 'react-router-dom';

// Image
import aboutImg from '../../assets/images/about/ab.png';
import aboutBadge from '../../assets/images/about/badge.png';

const About = () => {

    return (
        <div className="about__area about__area_one p-relative pt---10 pb---120">
            <div className="container">                        
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about__image">
                            <img src={aboutImg} alt="About" />
                            <img className="react__shape__ab" src={aboutBadge} alt="Shape Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content">
                            <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">Somos futuro,<br/> <em>Somos Praxis</em></h2>
                            <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Mejora tus habilidades laborales con nuestra capacitación continua. Aprende en un ambiente amigable y alcanza el éxito profesional.<br/></p>
                            <p className="about__paragraph2 wow animate__fadeInUp" data-wow-duration="0.7s"> Inscribete hoy?</p>
                            <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">Educación de<br/> <em>Calidad</em></h2>
                            <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Contamos con un equipo de expertos altamente calificados que se dedican a brindar a nuestros estudiantes una experiencia de aprendizaje enriquecedora y práctica. <br/>Ofrecemos cursos en línea y presenciales para <br/>garantizar que nuestros estudiantes tengan <br/>acceso a la capacitación que necesitan para <br/>crecer y destacarse en la industria.<br/><br/></p>
                            <ul className="wow animate__fadeInUp" data-wow-duration="0.9s">
                                <li><Link to="/about" className="more-about"> Leer Más <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                                <li className="last-li">
                                    <em>Soporte a</em>
                                    <Link to="/contact">infor@gmail.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;