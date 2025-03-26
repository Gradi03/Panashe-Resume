import React from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Footer from './components/Footer';  // Import the Footer

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Reviews />
      <Contact />
      <Footer />  {/* Add the Footer component here */}
    </div>
  );
}

export default App;
