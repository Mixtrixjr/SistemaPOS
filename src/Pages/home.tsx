import Header from "../Shared/header"
import Menu from "../Shared/menu"
import Footer from '../Shared/footer';
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="app-viewport">
      <Header />

      <div className="middle-container">
        <Menu />
        
        <main className="main-content-area">
          <div className="welcome-box">
            <h2>Hola Mundo xd</h2>
            <Outlet></Outlet>
            
          </div>
        </main>
      </div>

      {/* 3. Barra inferior operativa */}
      <Footer />
    </div>
  )
}

export default Home