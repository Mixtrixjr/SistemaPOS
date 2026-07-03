import { Link } from "react-router-dom"

function Header() {

  return (
    <>
       <div className="Header">
          <Link to="/" className="Logo">
          <img src="logo.png"></img>
          </Link>
        <p>Hol soy el header xd</p>
       </div>
    </>
  )
}

export default Header
