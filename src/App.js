import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from "./pages/Home";
import Menu from './pages/Menu';
import Contact from "./pages/Contact";
import NoPages from "./pages/NoPages";
import Footer from "./pages/components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='menu' element={<Menu/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='*' element={<NoPages/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
