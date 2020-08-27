import React, { useState } from 'react';
import fakeData from '../../fakeData/course'
import './Courses.css';
import CourseName from '../Name/CourseName';
import Cart from '../Cart/Cart';

const Courses = () => {
    const data=fakeData;
    console.log(data);
    const [course,setCourse] =useState(data);
    const [cart,setCart] =useState([])
    const handlerAddCourse=(course)=>{
        console.log("added",course)

        const newCart=[...cart,course];
        setCart(newCart);
    }
    
    
    return (
        <div id="course-container">
            <div className="course-name">
                <div className="row">
                {
                    data.map(a=> <CourseName 
                        handlerAddCourse={handlerAddCourse}
                        course={a} kye={a.id} ></CourseName>)
                }     
                </div>
                      
            </div>
            <div className="cost-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Courses;