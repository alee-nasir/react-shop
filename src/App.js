import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navmenu from "./components/Navmenu";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navmenu />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/new-meetup" element={<ProductDetails />} />
        <Route>404 Page Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
