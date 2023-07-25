import { ItemCount } from "../ItemCount/ItemCount";
export const ItemDetail = ({id,category,description,title, img, price, stock}) => {
    
    const styleDetail = {
        margin: '2px',
        padding: '5px', 
        textAlign : 'center',
        
      };
    return (
        <div  className="container " >
            <div  className="row mt-5 mb-5" >
                <div className="col-md-2 " >
                </div>
                <div className="col-md-4 shadow-lg p-3 mb-5 bg-body rounded  h-100" style={styleDetail}>
                    <img src={img} className="card-img-top item__img rounded" alt=""  />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            Precio: $ {price} <br />
                            Categoría: {category}<br />
                            Stock: {stock}
                        </p>
                    </div>
                    <div className="mt-3">
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}  /> 
                    </div>  
                </div>
                <div className="col-md-4 mt-3 " >
                    <h2>Descripción: </h2>
                    <h6>{description}</h6>
                    <h6>{description}</h6>
                </div>
            </div>
        </div>
     )
}