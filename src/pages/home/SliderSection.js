import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import sliderImg1 from "../../assets/images/slider/1.png";
import sliderImg2 from "../../assets/images/slider/2.png";
import sliderImg11 from "../../assets/images/slider/11.jpg";
import sliderImg12 from "../../assets/images/slider/11.jpg";

const HomeSlider = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        margin: 0,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <div className="react-slider-part">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='f-BnCysIkCo' onClose={() => { openModal(); }} />
                <div className="home-sliders home2">
                    <Slider {...sliderSettings}>
                        <div className="single-slide">
                            <div className="slider-img">
                                <img className="desktop" src={sliderImg1} />
                                <img className="mobile" src={sliderImg11} alt="Slider Image 1" />
                            </div>
                            <div className="container">
                                <div className="slider-content">
                                    <div className="content-part">
                                        <span className="slider-pretitle wow animate__fadeInUp" style={{ backgroundColor: '#2d8dca ', color: 'white' }} data-wow-duration="1s">SOMOS PRAXIS</span>
                                        <h2 className="slider-title wow animate__fadeInUp" data-wow-duration="1s">
                                        El conocimiento cobra<br /> sentido cuando se <br />
                                        aplica en la práctica.
                                        </h2>
                                        <div className="slider-btn wow animate__fadeInUp" data-wow-duration="1.2s">
                                            <Link to="/course" className="react-btn-border">Cursos</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="event__video-btn--play wow animate__fadeInUp" data-wow-duration="1.4s">
                                <Link to="#" className="event__video-btn--play-btn custom-popup" onClick={() => { openModal(); }}>
                                    <i className="arrow_triangle-right"></i>
                                    <em> Ver <br />Video</em>
                                </Link>
                                </div>
                            </div>                        
                        </div>
                        <div className="single-slide">
                            <div className="slider-img">
                                <img className="desktop" src={sliderImg2} alt="Slider Image 1" />
                                <img className="mobile" src={sliderImg12} alt="Slider Image 1" />
                            </div>
                            <div className="container">
                                <div className="slider-content">
                                    <div className="content-part">
                                    <span className="slider-pretitle wow animate__fadeInUp" style={{ backgroundColor: '#f8360c ', color: 'white' }} data-wow-duration="1s">SOMOS FUTURO</span>

                                        <h2 className="slider-title wow animate__fadeInUp" data-wow-duration="1s">
                                        Mejora tus habilidades <br />laborales con <br />nuestra capacitación
                                        </h2>
                                        <div className="slider-btn wow animate__fadeInUp" data-wow-duration="1.2s">
                                            <Link to="/about" className="react-btn-border">Información</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="event__video-btn--play wow animate__fadeInUp" data-wow-duration="1.4s">
                                <Link to="#" className="event__video-btn--play-btn custom-popup" onClick={() => { openModal(); }}>
                                    <i className="arrow_triangle-right"></i>
                                    <em> Ver <br />Video</em>
                                </Link>
                                </div>
                            </div>                        
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default HomeSlider;