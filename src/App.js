import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/header/Header";



function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
   
  );
}

export default App;
