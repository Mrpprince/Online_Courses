import React from 'react';
import './CourseName.css';

const CourseName = (props) => {
    
    console.log(props.course.name);

    const {name,instructor,coast,image}=props.course;
    
    return (
        
        <div  className=" col-lg-4 col-md-6">
            <div className="card" id="card">
                <div className="card-body">
                <img src={image} alt="" className="img-fluid"/>
                </div>
                <h4 className="card-title text-center font-weight-bold">
                      {name}
                   </h4>
                   <p className="text-center">Instructor by : {instructor}</p>
                          <p className="text-center font-weight-bold">$ {coast}</p>
                   <button className="btn btn-success " onClick={()=>props. handlerAddCourse(props.course)}>Enroll Now</button>
            </div>

        </div>
        
      
    );
};

export default CourseName;