import { useState } from "react"



export const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock ){
            setQuantity(quantity + 1 );
        }
    }

    const decrement = () => {
        if(quantity <= stock && quantity > 1  ){
            setQuantity(quantity - 1  );
        }
    }

    return (
        <div> 
            <div>
                <div  className="btn-group"  >
                    <button className="btn btn-default"  style={{ marginRight: '10px' }} onClick={decrement}>-</button>
                    <h4 className="Number">{quantity}</h4>
                    <button className="btn btn-default rounded" style={{ marginLeft: '10px', marginRight: '10px' }} onClick={increment}>+</button>
                    <button className="btn btn-success rounded"  style={{ marginLeft: '20px' }} onClick={() => onAdd(quantity)} disabled = {!stock}>
                    Añadir
                    </button>
                </div>
            </div>
        </div>
     )  
}
