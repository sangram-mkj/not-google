import logo from './logo.svg';
import './App.css';
import { Search } from './components/Search';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
