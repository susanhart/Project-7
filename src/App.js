import React, { Component } from 'react';
import apiKey from './config';
import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

// these are the components
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import PageNotFound from './components/PageNotFound';
import SearchForm from './components/SearchForm';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      pictures: [],
      waterfalls: [], 
      flowers: [],
      mountains: []
    };
}

  componentDidMount() {
    this.performSearch("sunsets");
    this.performSearch("waterfalls");
    this.performSearch("flowers");
    this.performSearch("mountains");
  }

  performSearch = (query) => {

    console.log("hello you searched for");
    console.log(query);

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      
      if (query === "waterfalls") {
        this.setState({
          waterfalls: response.data.photos.photo,
          loading: false
        });
      } else if (query === "flowers") {
        this.setState({
          flowers: response.data.photos.photo,
          loading: false
        });
      } else if (query === "mountains") {
        this.setState({
          mountains: response.data.photos.photo,
          loading: false
        });
      } else { 
        this.setState({
        pictures: response.data.photos.photo,
        loading: false
      });
    }
    })
    .catch(error => {
      console.log('Error fetching parsing data', error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
        <Route render={(props) => <SearchForm {...props} onSearch={this.performSearch} /> }  />
          {/* <Route exact path="/" component={() => <SearchForm onSearch={this.performSearch} />}/>
          <Route exact path="/waterfalls" component={() => <SearchForm onSearch={this.waterfallsSearch} />}/>
          <Route exact path="/flowers" component={() => <SearchForm onSearch={this.flowersSearch} />}/>
          <Route exact path="/mountains" component={() => <SearchForm onSearch={this.mountainsSearch} />}/> */}
          <Nav />
          <Switch>
            {
              (this.state.loading)
              ? <h3 className='active'>Loading...</h3>
              : <Route exact path='/' render={() => <Gallery data={this.state.pictures} />} />
            }
            <Route path='/waterfalls' render={() => <Gallery data={this.state.waterfalls} />} />
            <Route path='/flowers' render={() => <Gallery data={this.state.flowers} />} />
            <Route path='/mountains' render={() => <Gallery data={this.state.mountains} />} />
            <Route path='/search' render={() => <Gallery data={this.state.pictures} />} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}