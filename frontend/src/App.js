import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";
import './App.css'

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
