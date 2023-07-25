

export const Item = ({id,title, img, price, category, stock}) => {
    const style = {
        margin: '2px',
        padding: '5px', // Padding de 10 píxeles en todas las direcciones
        textAlign : 'center',
      };
    return (
        <div style={style} className="shadow-lg p-3 mb-5 bg-body rounded h-100" >
            <img src={img} className="card-img-top item__img img-fluid rounded" alt=""  />
            <div className="card-body">
                <h5 className="card-title mt-3">{title}</h5>
                <p className="card-text">
                        Precio: $ {price} <br />
                        Categoría: {category}<br />
                        Stock: {stock}
                </p>
                <a href={`/item/${id}`} className="btn btn-primary">Ver Detalle</a>
            </div>
        </div>
     )
     
}