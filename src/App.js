import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import About from "./page/About";
import Contact from "./page/Contact";
function App() {
  return (
      <BrowserRouter>
 <Header />
          <Routes>
              <Route  path={'/'} element={<Home />} />
              <Route  path={'/about-us'} element={<About />} />
              <Route  path={'/contact'} element={<Contact/>} />


          </Routes>

          <Footer/>
      </BrowserRouter>




  );
}

export default App;
