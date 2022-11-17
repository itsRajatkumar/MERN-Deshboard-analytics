import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";
import './App.css'
import AddData from "./Components/AddData/AddData";
// import Dotenv from 'dotenv';
// Dotenv.config()

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <>
      <Route exact path="/"  element={ <Dashboard/>}/>
      <Route exact path="/add-data"  element={ <AddData/>}/>
      </>
      </Routes>
    </Router>
  );
}

export default App;
