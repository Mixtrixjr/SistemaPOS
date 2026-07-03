
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/home'
import Inventario from './Pages/inventario'
import Informes from './Pages/informes'
import Pedidos from './Pages/pedidos'
import Usuarios from './Pages/usuarios'
import Ventas from './Pages/ventas'
import Menu from './Shared/menu'


const router = createBrowserRouter([{
  path: "/",
  element: <Navigate to="Home"></Navigate>
  },
  {
  path: "/",
  element: <Home/>,
  children: [
    {
      index: true,
      element: <Home/>
    },
      {
      path: "menu",
      element: <Menu/>
    },
    {
      path: "inventario",
      element: <Inventario/>
    },
    {
      path: "ventas",
      element: <Ventas/>
    },
    {
      path: "pedidos",
      element: <Pedidos/>
    },
    {
      path: "usuarios",
      element: <Usuarios/>
    },
    {
      path: "informes",
      element: <Informes/>
    },
  ]
  }
])

function Direcionamiento() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default Direcionamiento
