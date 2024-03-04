import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Profile from './Profile.jsx';
import TollsAndFines from './Tollsandfines.jsx';
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState('profile'); 

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/profile" onClick={() => setSelectedTab('profile')}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/tolls-and-fines" onClick={() => setSelectedTab('tollsAndFines')}>
                Tolls and Fines
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/tolls-and-fines" element={<TollsAndFines />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
