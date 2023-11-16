import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ApiContext } from "../Context/ApiProvider"
import { useState } from "react"



const Home = () => {
    const { datos } = useContext(ApiContext)

    const navigate = useNavigate()

    // const [alerta,setAlerta] = useState("")

    const [busqueda, setBusqueda] = useState({
        id: "",
    })

  

    const handleSubmit = (e) => {
        e.preventDefault()


        const datosPizza = e.target.parentElement.parentElement

        busqueda.id = datosPizza.querySelector('#idpizza').textContent

        navigate(`/pizza/${busqueda.id}`)

       
    }

   


  



  return (
    <div>
        <div className="text-white d-flex justify-content-center align-items-center flex-column PizzaFondo">
            <h1 >!Pizzeria Mamma Mia!</h1>
            <p>!Tenemos las mejores pizzas que podras encontrar!</p>
        </div>

        <div className=" container mt-5 ">
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 gap-3">
                {datos.map((pizza) => (
                
                    <div className="col" key={pizza.id}>
                        <div className="card shadow-lg">
                            <img src={pizza.img} alt={pizza.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase fw-bolder text-center"> {pizza.name}</h5>
                                <p className="idPizza"> Codigo de la pizza # <span id="idpizza">{pizza.id}</span></p>
                                <hr />
                                <h5 className="text-uppercase fw-bolder">ingrediente:</h5>
                                <ul className="text-uppercase">
                                    {pizza.ingredients.map((ingredient) => (
                                        <li key={ingredient}>{ingredient}</li>
                                    ))}
                                </ul>
                                <hr />
                                <h5 className="text-uppercase fw-bolder">Precio:</h5>
                                <p>${pizza.price}</p>
                            
                                <form className="d-flex justify-content-center " onSubmit={handleSubmit}>
                                <button className="btn btn-danger text-uppercase fw-bolder" type="submit"> <span> detalle</span> </button>
                                </form>
                                
                                
            
                            </div>
    
                        </div>
                        
                    </div> 

                ))}
            </div>
           

        </div>
    </div>
    
  )
}

export default Home

// debo de usar el use navigate donde al hacer click me dirija al link con un parametro dinamico 
// en el evento handledsubmit crear quiza con un estado un con un objeto con datos adquiridos desde el boton