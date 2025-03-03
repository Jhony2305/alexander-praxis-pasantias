import React from 'react';

import SectionTitle from '../../components/SectionTitle'

import SingleService from '../../components/Service/SingleService';

import serviceImg1 from '../../assets/images/service/1.jpg'
import serviceImg2 from '../../assets/images/service/2.jpg'
import serviceImg3 from '../../assets/images/service/3.jpg'
import serviceImg4 from '../../assets/images/service/4.jpg'

const Service = () => {

    return (
        <div className="react_popular_topics pt---100 pb---70">
            <div className="container">
                <SectionTitle Title="Cursos" />
                <div className="row">
                    <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.3s">
                        <SingleService
                            itemImg={serviceImg1}
                            title="Especialista en quiropraxia"
                        />
                    </div>
                    <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.5s">
                        <SingleService
                            itemImg={serviceImg2}
                            title="Especialista en tanatopraxia y tanatoestética"
                        />
                    </div>
                    <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.7s">
                        <SingleService
                            itemImg={serviceImg3}
                            title="Especialista en peluquería canina"
                        />
                    </div>
                    <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.9s">
                        <SingleService
                            itemImg={serviceImg4}
                            title="Auxiliar de veterinaria"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;