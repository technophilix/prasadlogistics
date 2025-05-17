import logo from './logo.svg';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Home from "./page/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import About from "./page/About";
import Contact from "./page/Contact";
import Service from "./page/Service";
import Admin from "./page/Admin";
import Login from "./page/Login";
import NotFound from "./page/Notfound";
import PDFViewer from "./page/Certificate";

function App() {

    return (
        <BrowserRouter>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about-us'} element={<About/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/services'} element={<Service/>}/>
                <Route path={'/adminhome'} element={<Admin/>}/>
                <Route path={'/admin'} element={<Login/>}/>
                <Route path={'/certificate'} element={<PDFViewer/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>


        </BrowserRouter>


    );
}

export default App;
