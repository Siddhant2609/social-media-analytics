import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import FeedPage from './pages/FeedPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/feed" element={<FeedPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;