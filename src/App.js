
import { Route, Routes, Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProductDetail from './Pages/Detail/Detail';
import CartScreen from './Pages/Cart/Cart';

function App() {
  return (

    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail" element={<ProductDetail/>} />
        <Route path="/cart"  element={<CartScreen/>} />
      </Routes>
    </>

  );
}
export default App