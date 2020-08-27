import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const cart =props.cart;
    let total=0;
    for (let i=0;i<cart.length;i++)
    {
       
        total=total + cart[i].coast;
    }
    const TotalPrice =(total).toFixed(2);
    return (
    <div className="style">
    <h4 className="total ml-5">Total</h4>
    <h4 className="ml-4">Total Enroll {cart.length}</h4>
    <p className=" ml-5 font-weight-bold">Coast: ${TotalPrice}</p>
        </div>
    );
};

export default Cart;