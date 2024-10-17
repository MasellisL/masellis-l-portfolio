import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from '../pages/home.jsx'
import Gamecube from '../pages/gamecube.jsx'
import Typing from '../pages/typing.jsx'
import Scheduler from '../pages/scheduler.jsx'
import Guitar from '../pages/guitar.jsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typing" element={<Typing />} />
          <Route path="/gamecube" element={<Gamecube />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/guitar" element={<Guitar />} />
        </Routes>
    </Router>
  );
}

export default App;