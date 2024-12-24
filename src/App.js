import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Art from "./pages/Art";
import Characters from "./pages/Characters";
import Clothings from "./pages/Clothings";
import Creatures from "./pages/Creatures";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Tools from "./pages/Tools";



const App = () => {
  return (
      <Router>
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/art">Art</Link></li>
                  <li><Link to="/characters">Characters</Link></li>
                  <li><Link to="/clothings">Clothings</Link></li>
                  <li><Link to="/creatures">Creatures</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/items">Items</Link></li>
                  <li><Link to="/tools">Tools</Link></li>
              </ul>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/art" element={<Art />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/clothings" element={<Clothings />} />
              <Route path="/creatures" element={<Creatures />} />
              <Route path="/events" element={<Events />} />
              <Route path="/items" element={<Items />} />
              <Route path="/tools" element={<Tools />} />
          </Routes>
      </Router>
  );
};

export default App;
