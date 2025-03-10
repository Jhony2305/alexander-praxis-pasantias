import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
	const { eventBannerImg, eventCategory, eventDate, eventStartTime, eventEndTime, eventTitle, eventLocation } = props;

	return (
		<div className="react-breadcrumbs single-page-breadcrumbs">
			<div className="breadcrumbs-wrap">
				<img className="desktop" src={require(`../../assets/images/event/${eventBannerImg}`)} alt={eventTitle}/>
				<img className="mobile" src={require(`../../assets/images/event/${eventBannerImg}`)} alt={eventTitle}/>
				<div className="breadcrumbs-inner">
					<div className="container">
						<div className="breadcrumbs-text">
							<Link to="#" className="cate">{eventCategory}</Link>
							<h1 className="breadcrumbs-title">{eventTitle}</h1>
							<ul className="user-section">                                        
							
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> {eventLocation}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>                
		</div>
	);
}

export default Breadcrumb;




