import React from 'react';


import infoImg1 from '../../assets/images/contact/2.png'
import infoImg2 from '../../assets/images/contact/3.png'
import infoImg3 from '../../assets/images/contact/4.png'

const ContactInfo = (props) => {
    const { contactBoxClass } = props;
    return (
        <ul className="address-sec">
            <li>
                <em className="icon"><img src={infoImg1} alt="image" /></em>
                <span className="text"><em>Dirección</em>Quito<br/> Av. Victor Hugo<br/> E10-13 Y París, Quito <br/> <br/>Guayaquill<br/> Av. Garzota 3 calle:,<br/> Eloy Vazquez Cevallos<br/> N8 Y, Guayaquil  </span>
            </li>
            <li>
                <em className="icon"><img src={infoImg2} alt="image" /></em>
                <span className="text"><em>Contactos</em> <a href="#">Telefono: (+593) 992382355</a> <a href="#">Correo: DiazVasquez@hotmail.com</a></span>
            </li>
            <li>
                <em className="icon"><img src={infoImg3} alt="image" /></em>
                <span className="text"><em>Horario de Atención</em> Lunes - Viernes: 09:00 - 18:00 <br/>Sábado & Domingo: 09:00 - 18:00</span>
            </li>
        </ul>
    );

}

export default ContactInfo;