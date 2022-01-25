import './styles/App.scss';
import { BrowserRouter as Router} from 'react-router-dom';
import Profil from './components/Profil';
import Card from './components/Card';

function App() {
  return (
    <Router>
      <div className="app">
        <Profil/>
        <Card/>
      </div>
    </Router>
  );
}

export default App;
