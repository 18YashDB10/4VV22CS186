import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UrlShortner from './Pages/urlShortner/UrlShortner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlShortner />} />
        {/* <Route path="/statistics" element={<Statistics />} /> */}
      </Routes>
    </Router>
  );
}

export default App;