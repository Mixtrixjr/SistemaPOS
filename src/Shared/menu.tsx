import { Link } from "react-router-dom"


function Menu() {

  return (
    <>
      <div className="Lateral-Menu">
        <h3>Hola soy el menu lateral que no estoy lateral xd</h3>
        <div className="Inventario">
          <Link to="inventario">Inventario</Link>
        </div>
         <div className="Ventas">
          <Link to="ventas">Ventas</Link>
        </div>
         <div className="Pedidos">
          <Link to="pedidos">Pedidos</Link>
        </div>
         <div className="Usuarios">
          <Link to="usuarios">Usuarios</Link>
        </div>
         <div className="Informes">
          <Link to="informes">Informes</Link>
        </div>

      </div>
    </>
    
  )
}

export default Menu
