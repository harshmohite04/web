import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
// import Home from './components/Page/Home';
// import AboutUs from './components/Page/AboutUs';
// import Contact from './components/Page/Contact';
// import Services from './components/Page/Services';

import NavBar from './components/compo/NavBar.tsx';
import Home from './components/Page/Home.tsx';
import AboutUs from './components/Page/AboutUs.tsx';
import Contact from './components/Page/Contact.tsx';
import Services from './components/Page/Services.tsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
