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

class GalleryFetcher extends Component {
  constructor() {
    super();
    this.state = {
      loading: [],
      result: []
    };
  }
  fetch = () => {
    this.setState({
      loading: true
    })
    const query =  this.props.query || this.props.path;
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        result: response.data.photos.photo,
        loading: false
      });
    });
  }
  componentDidMount() {
    this.fetch();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path || prevProps.query !== this.props.query) {
      this.fetch();
    }
  
  }
  render() {
    if (!this.state.loading) {
      return <Gallery data={this.state.result} />
    } else {
      return null;
    }
  }
}
export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      query: null,
    };
}

  componentDidMount() {
    // this.performSearch("sunsets");
    // this.performSearch("waterfalls");
    // this.performSearch("flowers");
    // this.performSearch("mountains");
  }

  performSearch = (query) => {
    this.setState({
      query: query
    })
    // console.log("hello you searched for");
    // console.log(query);

    // axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    // .then(response => {
    //   this.setState({
    //     result: response.data.photos.photo,
    //     loading: false
    //   });
    //   if (query === "waterfalls") {
    //     this.setState({
    //       waterfalls: response.data.photos.photo,
    //       loading: false
    //     });
    //   } else if (query === "flowers") {
    //     this.setState({
    //       flowers: response.data.photos.photo,
    //       loading: false
    //     });
    //   } else if (query === "mountains") {
    //     this.setState({
    //       mountains: response.data.photos.photo,
    //       loading: false
    //     });
    //   } else { 
    //     this.setState({
    //     pictures: response.data.photos.photo,
    //     loading: false
    //   });
    // }
    // })
    // .catch(error => {
    //   console.log('Error fetching parsing data', error);
    // });
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
            <Route exact path='/' render={() => <GalleryFetcher path="sunsets" query={this.state.query} />} />
            <Route path='/waterfalls' render={() => <GalleryFetcher path="waterfalls" query={this.state.query} />} />
            <Route path='/flowers' render={() => <GalleryFetcher path="flowers" query={this.state.query} />} />
            <Route path='/mountains' render={() => <GalleryFetcher path="mountains" query={this.state.query} />} />
            <Route path='/search' render={() => <GalleryFetcher path="sunsets" query={this.state.query} />} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}