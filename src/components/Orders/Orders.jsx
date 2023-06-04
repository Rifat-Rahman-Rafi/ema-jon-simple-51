import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css';
import { removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const saveCart=useLoaderData();

    const [cart,setCart] = useState(saveCart);

    //console.log(saveCart);


    const handleRemoveFormCart=(id)=>{
        const remaning=cart.filter(product=>product.id!==id);
        setCart(remaning);
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product=><ReviewItems
                    key={product.id}
                    product={product}
                    handleRemoveFormCart={handleRemoveFormCart}
                    >

                    </ReviewItems>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Orders;