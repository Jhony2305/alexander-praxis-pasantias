import React from 'react';
import Blog from './BlogSection';
import About from './AboutSection';
import Service from './ServiceSection';
import HomeSlider from './SliderSection';
import Counter from './CounterSection';
import Testimonial from './TestimonialSection';


const HomeMain =() => {
		return (
			<>
				<div className="react-wrapper">
            		<div className="react-wrapper-inner">
						{/* SliderSection-start */}
						<HomeSlider />
						{/* SliderSection-start */}

						{/* Service-area-start */}
						<Service />
						{/* Service-area-end */}

						{/* About-area-start */}
						<About />
						{/* About-area-end */}

						

						

						{/* Counter-area-start */}
						<Counter />
						{/* Counter-area-end */}

					

						{/* testmonial-area-start */}
						<Testimonial />
						{/* testmonial-area-end */}

						

						
					</div>
				</div>

			</>
		);
	}

export default HomeMain;