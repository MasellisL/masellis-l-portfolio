import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from '../pages/home.jsx'
import Gamecube from '../pages/gamecube.jsx'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamecube" element={<Gamecube />} />
        </Routes>
    </Router>
  );
}

export default App;