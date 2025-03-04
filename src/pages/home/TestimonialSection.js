import React from 'react';
import Slider from "react-slick";

import SectionTitle from '../../components/SectionTitle'
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';

import testiImg from '../../assets/images/testimonial/testimonial.png';
import comaImg from '../../assets/images/testimonial/coma.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <div className="react-clients react-clientso home-testimonial pt---90 pb---120">
                <div className="container">
                    <SectionTitle Title="Lo que dicen nuestros estudiantes" />
                    <div className="client-slider wow animate__fadeInUp" data-wow-duration="0.3s">
                        <Slider {...testimonialSettings}>
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg }
                                Title="Jhony Diaz"
                                Designation="Estudiante"
                                Desc="El nivel educativo es alto y orientado a las necesidades prácticas de los temas. Los profesores son magníficos y les agradezco por su apoyo"
                                ratingCount='4.9'
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg }
                                Title="Santiago Ayala"
                                Designation="Área TIC"
                                Desc="El Centro de Capacitación PRAXIS ha permitido afianzar mis conocimientos previos en el área"
                                ratingCount='4.8'
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg }
                                Title="Gilbert Oviol"
                                Designation="Estudiante"
                                Desc="PRAXIS ha mejorado mi carrera y los instructores brindan una excelente atención. El ambiente colaborativo es motivador. Recomendaría PRAXIS a cualquiera que busque avanzar en su carrera."
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg }
                                Title="Anabel Coronel"
                                Designation="Estudiante"
                                Desc="El nivel educativo es alto y orientado a las necesidades prácticas de los temas. Los profesores son magníficos y les agradezco por su apoyo"
                                ratingCount='4.9'
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg }
                                Title="Katherine Zambrano"
                                Designation="Estudiante"
                                Desc="El Centro de Capacitación PRAXIS ha permitido afianzar mis conocimientos previos en el área de estudio respectivo. Además de estar rodeado por una comunidad educativa que apoya y busca el crecimiento profesional"
                                ratingCount='4.9'
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial