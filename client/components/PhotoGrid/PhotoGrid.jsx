import React from 'react';
import Photo from './Photo.jsx';

const PhotoGrid = (props) => {
  return (
    <div className="grid-container">
      <div className="photo-1 cropped-photo" id="photo-1"><Photo data={props.photos.photo1} toggleCarousel={props.toggleCarousel}/></div>
      <div className="photo-2 cropped-photo" id="photo-2"><Photo data={props.photos.photo2} toggleCarousel={props.toggleCarousel}/></div>
      <div className="photo-3 cropped-photo" id="photo-3"><Photo data={props.photos.photo3} toggleCarousel={props.toggleCarousel}/></div>
      <div className="photo-4 cropped-photo" id="photo-4"><Photo data={props.photos.photo4} toggleCarousel={props.toggleCarousel}/></div>
      <div className="photo-5 cropped-photo" id="photo-5"><Photo data={props.photos.photo5} toggleCarousel={props.toggleCarousel}/></div>
    </div>
  )
}

module.exports = PhotoGrid;
