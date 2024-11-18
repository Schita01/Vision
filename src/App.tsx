import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodePage from './pages/CodePage';
import Home from './pages/Home';
import { LanguageProvider } from './context/LanguageProvider';
// import Navbar from './components/Navbar';

function App() {
  return (
      <LanguageProvider>
    <Router>
      {/* <Navbar/> */}

      <Routes>
        <Route path="/" element={<CodePage />} />  {/* საწყისი გვერდი */}
        <Route path="/home" element={<Home />} />   {/* Home გვერდი */}
      </Routes>
    </Router>
      </LanguageProvider>
  );
}

export default App;
