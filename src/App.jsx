import { useState } from 'react'
import {NavBar, ItemListContainer,Footerjsx, ItemDetailContainer} from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
        <BrowserRouter>
          <NavBar /> 
          <Routes>
                <Route path='/' element={ <ItemListContainer greeting="Bienvenidos!" /> }/>
                <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
                <Route path='/item/:itemId' element={ <ItemDetailContainer />  }/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
          <Footerjsx/> 
        </BrowserRouter>
    </div>
  )
}

export default App
