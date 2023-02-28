// import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/Navigation';
import { MainPage } from './components/MainPage';
import { SkillsCarousel } from './components/SkillsCarousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Navigation />
     <MainPage />
     <SkillsCarousel />
    </div>
  );
}

export default App;
