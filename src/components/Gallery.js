import React from 'react';
import GalleryItem from './GalleryItem';
import ImagesNotFound from './ImagesNotFound';

const Gallery = props => {

    const results = props.data;
    let images;
    if (results.length > 0) {
        images = results.map(images => 
            <GalleryItem url={`https://farm${picture.car}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} key={picture.id}/>) 
    } else {
        images = <ImagesNotFound/>
    }
    
    return (
        <div className='photo-container'>
          <h2>Results</h2>
          <ul className='photo-container ul'>
            {images}
          </ul>
        </div>
      );
    };
export default Gallery;