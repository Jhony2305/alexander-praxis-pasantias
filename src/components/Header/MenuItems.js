import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
 
const MenuItems = (props) => {
    
    const { parentMenu } = props;

    const location = useLocation();
    const postURL = location.pathname.split('/'); 
    const pathLength = Number(postURL.length)

    const [home, setHome] = useState(false)
	const [page, setPage] = useState(false)
	const [event, setEvent] = useState(false)
	const [course, setCourse] = useState(false)
	const [blog, setBlog] = useState(false)

	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setPage(false)
			setEvent(false)
			setCourse(false)
			setBlog(false)
		}
		else if (menu === 'page') {
			setHome(false)
			setPage(!page)
			setEvent(false)
			setCourse(false)
			setBlog(false)
		}
		else if (menu === 'event') {
			setHome(false)
			setPage(false)
			setEvent(!event)
			setCourse(false)
			setBlog(false)
		}
		else if (menu === 'course') {
			setHome(false)
			setPage(false)
			setEvent(false)
			setCourse(!course)
			setBlog(false)
		}
		else if (menu === 'blog') {
			setHome(false)
			setPage(false)
			setEvent(false)
			setCourse(false)
			setBlog(!blog)
		}
	};

    return (
           <>
                
                <li className={home ? "menu-active" : ""}>
                 <Link to="/" className={home ? "menu-active" : ""}>
                 Inicio
                 </Link>
                 </li>
            <li className={parentMenu === 'page' || parentMenu === 'event'  ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={ page ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('page'); }}>
                Institución
                    <span className="arrow "></span>
                </Link>
                <ul className={page ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === '/about' ? 'menu-active' : ''}>
                        <Link to="/about">Historia</Link>
                    </li>
                    <li className={location.pathname === "/instructor" ? "menu-active" : ""}>
                        <Link to="/event/1">Misión, Visión </Link>
                    </li>
                    <li className={postURL[1] === "instructor" && pathLength > 2 ? "menu-active" : ""}>
                        <Link to="/instructor/">Plantel Docente</Link>
                    </li>
                    <li className={location.pathname === "/login" ? "menu-active" : ""}>
                        <Link to="/login">Asesores Académicos</Link>
                    </li>
                    <li className={location.pathname === "/signup" ? "menu-active" : ""}>
                        <Link to="/signup">Modelo Educativo </Link>
                    </li>
                    {/*<li className={parentMenu === 'event' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={event ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('event'); }}>Events</Link>
                        <ul className={event ? "sub-menu sub-menu-open" : "sub-menu"}>
                            <li className={location.pathname === "/event" ? "menu-active" : ""}>
                                <Link to="/event">Events</Link>
                            </li>
                            <li className={location.pathname === "/event-sidebar" ? "menu-active" : ""}>
                                <Link to="/event-sidebar">Events Sidebar</Link>
                            </li>
                            <li className={postURL[1] === "event" && pathLength > 2 ? "menu-active" : ""}>
                                <Link to="/event/1">Event Single</Link>
                            </li>
                        </ul>
                    </li>
                    //sub menus//
                    */}
                </ul>
            </li>
              
            <li className={course ? "menu-active" : ""}>
            <Link to="/course">Cursos</Link>
                 </li>

                 <li className={location.pathname === '' ? 'menu-active' : ''}>
                <Link to="https://virtual.praxis.com.ec/" target="_blank" >Moodle Praxis </Link>
            </li>
            <li className={location.pathname === '/contact' ? 'menu-active' : ''}>
                <Link to="/contact">Contacto</Link>
            </li>
        </>
    );
}

export default MenuItems;