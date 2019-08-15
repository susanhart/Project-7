import React from 'react';
import apiKey from './config';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// these are the components
import Nav from './components/Nav';
import Gallery from './components/Gallery';
//import PageNotFound from './components/PageNotFound';
//import SearchForm from './components/SearchForm';
import axios from 'axios';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images: []
    }
  }
   getImages=() =>{
    // Make a request for a user with a given ID
    axios.get( 'https://api.flickr.com/services/rest/', {
      params: {
      api_key: apiKey,
      method: "flickr.photos.search",
      format: 'json',
      tags: 'sunsets',
      per_page: 24,
      nojsoncallback: 1,
      }
    }) 
      .then( (response)=> {
        // handle success
        this.setState({images:response.data.photos.photo})
        console.log(response.data.photos.photo);   
      })
      .catch( (error) =>{
        // handle error
        console.log(error);
      })
    }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. ok
        </p> <button onClick={this.getImages} >
        getImages </button> <Gallery images={this.state.images}/> 
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Nav/>
    </div>
  );}
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



  