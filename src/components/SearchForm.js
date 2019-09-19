import React, {Component} from 'react';

export default class SearchForm extends Component {
 state = {
     searchText: ''
 }   
 onSearchChange = e => {
    this.setState({searchText: e.target.value});
    if (e.target.value === ""){
       this.props.clearQuery();
    }
 }
 handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.userSearch.value);
 }

 render(){
    return (
        <form className='search-form' onSubmit={this.handleSubmit}>
         <input type='search' onChange={this.onSearchChange} name='search' ref={(input) => this.userSearch = input} placeholder='search' />
           <button type='submit'>Search</button>
        </form>
    );
 }
}
