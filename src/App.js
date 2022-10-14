import Example from "./Pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Example as Navbar } from "./Pages/components/twNavbar";
import {Example as Home} from "./Pages/home";
import Search from "./Pages/search";
import Homeaccessories from "./Pages/home-accessories";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (  
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path="/homeaccessories" element={<Homeaccessories/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
  </Router>
  );
}

export default App;
