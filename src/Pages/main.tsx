import Header from "../Shared/header"
import Menu from "../Shared/menu"
import Footer from '../Shared/footer';

function Main() {
  return (
    <div className="app-viewport">
      <Header />

      <div className="middle-container">
        <Menu />
        
        <main className="main-content-area">
          <div className="welcome-box">
            <h2>Hola Mundo xd</h2>
            <p>Zona del sistema de ventas lista para desarrollo.</p>
          </div>
        </main>
      </div>

      {/* 3. Barra inferior operativa */}
      <Footer />
    </div>
  )
}

export default Main