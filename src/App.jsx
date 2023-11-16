import { Route,Routes,Navigate } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Views/Home"
import Carrito from "./Views/Carrito"
import ApiProvider from "./Context/ApiProvider"
import PizzaDetalle from "./Views/PizzaDetalle"
const App = () => {
  return (
    <>
      <ApiProvider>
        <Routes>
          <Route path="/" element={<Navbar/>} >
            <Route index element={<Home/>} /> 
            <Route path="/pizza/:id" element={<PizzaDetalle/>} /> 
            <Route path="/carrito" element={<Carrito/>} /> 

          </Route>
  
          <Route path='*' element={<Navigate to='/'/>}/>
        
        </Routes>

      </ApiProvider>
      
      
    </>
    
 
  )
}

export default App