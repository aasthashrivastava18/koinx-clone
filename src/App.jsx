import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import CryptoDetails from './components/CryptoDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <CryptoDetails />
      </div>
    </Router>
  );
}

export default App;
