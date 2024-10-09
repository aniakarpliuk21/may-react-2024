import React, { FC } from 'react';
import { IProductModel } from '../../models/IProductModel';
import Product from '../product/Product';
import { productList } from '../../Data';
import './Products.css'

const Products:FC = () => {
    const products : IProductModel[] = productList.products;
    return (
        <div className={'products'}>
            {
                products.map((product:IProductModel)=>(<Product key={product.id} product={product}/>))
            }
        </div>
    );
};

export default Products;