import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Outras rotas podem ser adicionadas aqui */}
      </Routes>
    </Router>
  );
}

export default App;
