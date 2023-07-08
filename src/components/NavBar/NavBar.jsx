import { Item } from './Items/item';

import { CartWidget } from '../CartWidget/CartWidget';


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            
            <a className="navbar-brand" href="#">
                <img src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-open-brown-book-illustration-png-image_4719502.jpg" height={30} width={30} alt="" /> 
                        Librería Uno</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav"> 
                <Item nombre="Novedades"/>
                <Item nombre="Best Sellers"/>
                <Item nombre="Mas Vendidos"/>
            </ul>
            
            </div>
            <CartWidget/>
        </div>
        </nav>
    )
}
