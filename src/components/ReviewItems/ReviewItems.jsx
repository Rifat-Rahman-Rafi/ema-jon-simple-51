import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
const ReviewItems = ({product , handleRemoveFormCart}) => {
    const {id,img,price,name,quantity}=product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price:<span className='orange-text'>${price}</span></p>
                <p>Quantity:<span className='orange-text'>${quantity}</span></p>

            </div>
            <button onClick={()=>handleRemoveFormCart(id)} className='btn-delete'>
            <FontAwesomeIcon className='btn-icon' icon={faTrashCan} />
               </button>

            
        </div>
    );
};

export default ReviewItems;