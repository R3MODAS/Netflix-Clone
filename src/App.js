import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";

function App() {
  
  return (
    <Router>
        <Header />
        <Routes>
          <Route path = "/" element = {<Main />}/>
          <Route path = "/login" element= {<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
