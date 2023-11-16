import { NavLink,Outlet } from "react-router-dom"

const Navbar = () => {
    const setActiveClass = ({isActive}) => ( isActive ? 'text-white' : 'text-dark' )


  return (
    <>  
    <nav className="navbar navbar-expand-lg bg-danger Navbar p-4">
        <div className="container-fluid">
            <NavLink to="/" className={setActiveClass}>  pizzas mamma mia</NavLink>
            <NavLink to="/carrito/" className={setActiveClass}> <span>Valor: $</span></NavLink>
        </div>
    </nav>
    
    <Outlet/>

    
    
</>
  )
}

export default Navbar