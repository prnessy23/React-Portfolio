import React from 'react';
// import PortfolioContainer from "./components/PortfolioContainer";
import Header from './components/Header/Header';
import AboutMe from './components/About/About';
import Portfolio from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// 
function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route exact path="/" element={<AboutMe />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/resume" component={Resume} /> */}
                </Routes>
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;
