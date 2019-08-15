import React from 'react';
import GalleryItem from './GalleryItem';
import ImagesNotFound from './ImagesNotFound';

const Gallery = props => {

    let images;
    if (props.images.length > 0) {
        images = props.images.map(picture => 
            <GalleryItem url={`https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} key={picture.id}/>) 
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