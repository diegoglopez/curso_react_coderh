import { useEffect, useState } from "react"
import { getProducts, getProducstByCategory } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([]);
    const  {categoryId}  = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProducstByCategory : getProducts;
        
        asyncFunc(categoryId)
                .then(response  => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
        })
    } )

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
