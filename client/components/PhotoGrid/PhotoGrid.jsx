import React from 'react';
import Photo from './Photo.jsx';
import './PhotoGrid.css';

const PhotoGrid = (props) => {
const styles = {
    photo1: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: 'url(' + props.photos.photo1.url + ')'
    },
    photo2: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: 'url(' + props.photos.photo2.url + ')'
    },
    photo3: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: 'url(' + props.photos.photo3.url + ')'
    },
    photo4: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: 'url(' + props.photos.photo4.url + ')'
    },
    photo5: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: 'url(' + props.photos.photo5.url + ')'
    }
  }

  return (
    <div className="grid-container">
      <div className="photo-1 cropped-photo" id="photo-1" style={styles.photo1}></div>
      <div className="photo-2 cropped-photo" id="photo-2" style={styles.photo2}></div>
      <div className="photo-3 cropped-photo" id="photo-3" style={styles.photo3}></div>
      <div className="photo-4 cropped-photo" id="photo-4" style={styles.photo4}></div>
      <div className="photo-5 cropped-photo" id="photo-5" style={styles.photo5}></div>
    </div>
  )
}

export default PhotoGrid;

