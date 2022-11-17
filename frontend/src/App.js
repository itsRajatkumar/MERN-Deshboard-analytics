import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";
import './App.css'
// import Dotenv from 'dotenv';
// Dotenv.config()

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <>
      <Route exact path="/"  element={ <Dashboard/>}/>
      </>
      </Routes>
    </Router>
  );
}

export default App;
