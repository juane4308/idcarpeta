import "./App.css"
import NavBar from "./complement/navBar/NavBar"
import ItemListContainer from "./complement/ItemListContainer/ItemListContainer"
import ItemDetailConteiner from "./complement/ItemDetailConteiner/ItemDetailConteiner"
import{ BrowserRouter,Routes,Route }  from "react-router-dom"
function App() {
  const addToCart = (count) =>{
    console.log (count)
  }

  return (
    <BrowserRouter >
    <NavBar />
    <Routes>
    <Route path="/" element={ <ItemListContainer/> } />
    <Route path="/category/:idCategory" element={ <ItemListContainer/> }/>
    <Route path="/detail/:idProduct" element={ <ItemDetailConteiner/> }/>
    
    </Routes>
    <ItemListContainer />
    </BrowserRouter>
  )
}

export default App
