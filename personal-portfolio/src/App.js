// import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/Navigation';
import { MainPage } from './components/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Navigation />
     <MainPage />
    </div>
  );
}

export default App;
