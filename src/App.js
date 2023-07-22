import './App.css';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Home from './Screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/About" element={<About />}></Route>
      <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
