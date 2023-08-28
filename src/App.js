import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ExplorePage from './components/ExplorePage'; 

import './App.css';
import Main from './components/Main';

function App() {
  return (
    
        <Router>
        <div>
          <section>                              
              <Routes>  
                 <Route path="/" element={<Main/>}/>
                 <Route path="/explorepage" element={<ExplorePage/>}/>
              </Routes>                    
          </section>
        </div>
      </Router>
  );
}

export default App;
