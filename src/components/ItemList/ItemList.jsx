import { Item } from "../Item/Item"


export const ItemList = ({products}) => {
    // Función para dividir el array en subarrays de longitud 4
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    // Divide el array de productos en subarrays de longitud 4
    const productChunks = chunkArray(products, 4);
    return (
        <div>
            {productChunks.map((chunk, index) => (
                <div className="row" key={index}>
                    {chunk.map((product) => (
                        <div className="col-md-3 mt-3 mb-3" key={product.id}>
                            <Item
                                // Pasar las propiedades del producto al componente Item
                                key={product.id}
                                id={product.id}
                                img={product.img}
                                category={product.category}
                                title={product.title}
                                price={product.price}
                                stock={product.stock}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
     )
}