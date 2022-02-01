import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profil from './components/Profil';
import Day from './components/Day';
import Week from './components/Week';
import Month from './components/Month';

function App() {
  return (
    <Router>
      <div className='app'>
        <Profil/>
        <div className='cardContainer'>
          <Routes>
            <Route path='*' element={<Day/>}/>
            <Route path='/day' element={<Day/>}/>
            <Route path='/week' element={<Week/>}/>
            <Route path='/month' element={<Month/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
