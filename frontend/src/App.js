import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponent';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <HelloComponent />
      </header>
    </div>
  );
}

export default App;
