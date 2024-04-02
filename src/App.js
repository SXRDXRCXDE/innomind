import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurProjects from "./pages/OurProjects/OurProjects";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/about_us'} element={<AboutUs/>}/>
            <Route path={'/projects'} element={<OurProjects/>}/>
        </Routes>
    </div>
  );
}

export default App;
