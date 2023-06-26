import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
function App() {
  return (
      <BrowserRouter>
 <Header />
          <Routes>
              <Route  path={'/'} element={<Home />} />


          </Routes>

          <Footer/>
      </BrowserRouter>




  );
}

export default App;
