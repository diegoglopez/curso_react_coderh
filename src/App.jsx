import { useState } from 'react'
import {NavBar, ItemListContainer,Footerjsx} from './components';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar /> 
      <div className='container'>
        <ItemListContainer greeting="Bienvenidos!" /> 
     
      </div>
    </div>
  )
}

export default App
