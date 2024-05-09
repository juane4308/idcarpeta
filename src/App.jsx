import "./App.css"
import NavBar from "./complement/navBar/NavBar"
import ItemListContainer from "./complement/ItemListContainer/ItemListContainer"
import ItemDetailConteiner from "./complement/ItemDetailConteiner/ItemDetailConteiner"
import{ BrowserRouter,Routes,Route }  from "react-router-dom"
import { CartProvide } from "./context/CartContext"
import CheckOut from "./complement/chekOut/CheckOut.jsx"
import Cart from "./complement/Cart/Cart"
import { ToastContainer } from "react-toastify"



function App() {

  return (
    <BrowserRouter >
    <CartProvide>
    <NavBar />
    <ToastContainer />
      <Routes>
          <Route path="/" element={ <ItemListContainer/> } />

          <Route path="/detail/:idProduct" element={ <ItemDetailConteiner/> }/>

          <Route path="/category/:idCategory" element={ <ItemListContainer/> }/>
          
          <Route path="/Cart" element={<Cart/>} />
          
          <Route path="/Checkout" element={<CheckOut/>}/>

      </Routes>
    </CartProvide>  
    </BrowserRouter>
  );
}

export default App;
