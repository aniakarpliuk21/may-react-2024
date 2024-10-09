import {IProductModel} from "./IProductModel";

export interface IProductListModel{
    products:IProductModel[],
    total:number,
    skip:number,
    limit:number
}