import AppRoutes from "./routes/AppRoutes"
import AuthContext from "./contexts/AuthContext"
import DadosContext from "./contexts/DadosContext"

import { useEffect, useState } from "react"
function App() {

  const[logged, setLogged] = useState(false);

  const[payment, setPayment] = useState(null);
  const[address, setAddress] = useState([]);
  const[productsOrders, setProductsOrders] = useState([]);
  
  function login() {
    setLogged(true);
    localStorage.setItem('logged', true);
  }

  function logout() {
    setLogged(false);
    localStorage.removeItem('logged');
  }

  useEffect(() => {
    if(localStorage.getItem('logged')) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ logged, setLogged, login, logout }}>
        <DadosContext.Provider value={{ payment, setPayment, address, setAddress, productsOrders, setProductsOrders }}>
          <AppRoutes />
        </DadosContext.Provider>
      </AuthContext.Provider>
    </div>
  )
}

export default App
