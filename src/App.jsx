
import './App.css'
import NavBar from './component/navbar/NavBar.jsx'
import Product from './component/product/Product.jsx'
import Resturant from './component/resturant/Resturant.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>

    <BrowserRouter>
    <NavBar/>

    <Routes>
       <Route path='/Product' element={<Product/>}  />
       <Route path='/Resturant'  element={<Resturant/>}  /> 

    </Routes>
     
    
    </BrowserRouter>
    
    </>
  )
}

export default App
