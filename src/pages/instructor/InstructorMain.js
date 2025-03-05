import React from 'react';
import { Link } from 'react-router-dom'

import instructors from '../../data/Instructors.json';

const InstructorMain = () => {

    return (
        <>
            <div className="instructors___page pt---120 pb---140">
                <div className="container pb---60">                        
                    <div className="row">
                    {instructors.map((data, index) => {
                        return (
                        <div className="col-lg-3">
                            <div className="instructor__content">
                                <div className="instructor__image">
                                    <img src={require(`../../assets/images/instructor/${data.image}`)} alt={data.name} />
                                    <div className="content__hover">
                                        <p>{data.bio}</p>
                                        
                                    </div>
                                </div>                                    
                                <div className="bottom-content"> 
                                    <h4><Link to={`/instructor/${data.id}`}>{data.name}</Link></h4>
                                    <p>{data.designation}</p>
                                </div>                                 
                            </div>
                        </div>
                        )
                        }).slice(0, 8)}
                    </div>
                </div>
            </div>   
        </>

    );
}


export default InstructorMain;