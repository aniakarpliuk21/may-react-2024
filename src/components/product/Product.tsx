import React, { FC } from 'react';
import { IProductModel } from '../../models/IProductModel';
import './Product.css'
interface IProps {
    product:IProductModel
}
const Product:FC<IProps> = ({product}) => {
    return (
        <div className={'product'}>
            <h3>{product.id}{product.title}</h3>
            <img src={product.thumbnail} alt={product.title}/>
            <p>{product.description}</p>
            <h5>Ціна: {product.price}</h5>
        </div>
    );
};

export default Product;