import { useParams } from "react-router-dom"
import { useContext } from "react"
import { ApiContext } from "../Context/ApiProvider"
const PizzaDetalle = () => {
  const { id } = useParams()
  
  const { datos, agregarCarrito } = useContext(ApiContext)
  let pizzaSeleccionada = datos.find( pizza => pizza.id === id)
 
 

  return (
    <>
      <div className="card m-5 shadow-lg" >
        <div className="row ">
          <div className="col-md-4 ">
            <img src={pizzaSeleccionada.img} alt={pizzaSeleccionada.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h1 className="card-title text-center text-uppercase fw-bolder">{pizzaSeleccionada.name}</h1>
              <hr />
              <p className="card-text">{pizzaSeleccionada.desc}</p>
              <h5 className="text-uppercase fw-bolder">ingredientes:</h5>
              <ul>
                {pizzaSeleccionada.ingredients?.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-evenly" >
                <h5 className="text-uppercase fw-bolder">Precio: ${pizzaSeleccionada.price}</h5>
                <button className="btn btn-danger" onClick={() => agregarCarrito(pizzaSeleccionada)} > Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default PizzaDetalle
