import { useContext } from "react"
import { ApiContext } from "../Context/ApiProvider"

const Carrito = () => {

  const { carrito } = useContext(ApiContext)
  console.log(carrito)


 


  return (
    <div>
      <div className="container-fluid border bg-body-secondary">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-12 bg-white w-50 h-50">
            <div>
              
              {carrito.map((pizza,index) => (
                <div key={index} className="d-flex justify-content-between  p-3 " >
                  <div className="d-flex text-align-center align-items-center " >
                    <img src={pizza.img} alt={pizza.name} className="h-100 w-25 align-self-center "/>
                    <h1 className="p-3">{pizza.name}</h1>
                    
                  </div>
                    <div className="d-flex text-align-center align-items-center ">
                      <p className="fw-bolder text-success mt-3 p-3 ">${pizza.price}</p>
                      <button className="btn btn-success">+</button>
                      <p className="fw-bolder mt-3 p-3">{pizza.cantidad}</p>
                      <button className="btn btn-danger">-</button>
                    </div>
                    <hr />
                </div>
                
              ))}
    
              
            </div>
            <h1>Total: ${carrito.reduce((total, pizza) => total + pizza.price * pizza.cantidad, 0)}</h1>
            <button className="btn btn-success">Terminar compra</button>
            
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Carrito