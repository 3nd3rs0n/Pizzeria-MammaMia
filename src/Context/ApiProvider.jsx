import { createContext, useState,useEffect } from "react"
import axios from "axios"

export const ApiContext = createContext()

const ApiProvider = ({children}) => {

    const [datos,setDatos] = useState([])

    const [carrito,setCarrito] = useState([])

    // console.log(carrito)

    const agregarCarrito = (pizza) => {
    
        const existe = carrito.some( pizzaCarrito => pizzaCarrito.id === pizza.id)

        if(existe ){
            const carritoActualizado = carrito.map( pizzaCarrito => {
                if(pizzaCarrito.id === pizza.id){
                    pizzaCarrito.cantidad++
                    return pizzaCarrito
                } else {
                    return pizzaCarrito
                }
            })
            setCarrito(carritoActualizado)
          

        } else {
            setCarrito([...carrito, pizza])
        }
       
        
    }

    const obtenerDatos = async () => {
        try {
            const response = await axios.get('./src/JSON/pizzas.json')
            console.log(response)

            setDatos(response.data)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(() => {
        obtenerDatos()
    }, [])


  return (
   <ApiContext.Provider value={{datos, carrito, agregarCarrito}}>
    {children}
   </ApiContext.Provider>
  )
}

export default ApiProvider

// agregar funcion al carrito linea 8 
// agregar otro estado para el carrito y la funcion
// 