import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Profil from './components/Profil';
import Day from './components/Day';
import Week from './components/Week';
import Month from './components/Month';

function App() {
  const routeName = 'time_tracking_dashboard';


  return (
    <Router>
      <div className='app'>
        <Profil routeName={routeName} />
        <div className='cardContainer'>
          <Routes>
            <Route path={`${routeName}/*`} element={<Day/>}/>
            <Route path={`${routeName}/day`} element={<Day/>}/>
            <Route path={`${routeName}/week`} element={<Week/>}/>
            <Route path={`${routeName}/month`} element={<Month/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
