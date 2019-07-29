import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. ok
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function About() {
  return (
  <div> About </div> 
)}

const App = () => (
  <BrowserRouter>
  <div className="container">
    <Route path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </div>
  </BrowserRouter>
)
export default App;
