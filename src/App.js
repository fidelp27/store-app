import Header from "./components/header/header"
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer"
import Nav from "./components/nav/nav"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./components/cart/cart"

function App() {
  return (
    <div>
      
        <BrowserRouter>
          <Header/>
          <Nav/>
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="BIENVENIDOS A MI TIENDA"/>}/>
            <Route path="/category/:catid" element={<ItemListContainer/>}/>
            <Route path="/product/:itemid" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
