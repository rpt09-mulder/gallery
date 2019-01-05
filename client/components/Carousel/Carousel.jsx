import React from 'react';
import Arrow from './Arrow.jsx';
import PrimaryPhoto from './PrimaryPhoto.jsx';
import _ from 'lodash';
import './Carousel.css';
const defaultImg = {url: 'https://s3.us-east-2.amazonaws.com/elasticbeanstalk-us-east-2-785620446758/property_images/blank.png'};

class Carousel extends React.Component {
  constructor(props) {
    super();
    this.state = {
      photos: [defaultImg,defaultImg,defaultImg,defaultImg,defaultImg],
      activePhoto: 0
    }
  }

  componentDidMount() {
    this.setState({
      photos: _.toArray(this.props.photos),
      activePhoto: this.props.clicked,
    })
  }

  slideHandler(e) {
    // Aliases for readability =============================
    const photos = this.state.photos;
    const activePhoto = this.state.activePhoto;
    // =====================================================

    if (e.target.id === 'slidePrevious') {
      if (activePhoto > 0) {
        this.setState({ activePhoto: activePhoto - 1 })
      }
    } else if (e.target.id === 'slideNext') {
      if (activePhoto < photos.length - 1) {
        this.setState({ activePhoto: activePhoto + 1 })
      }
    }
  }

  render() {
    return (
      <div id="carousel">
        <div id="carousel-exit-btn">
          <span onClick={this.props.toggleCarousel}>X</span>
        </div>
        <div id="carousel-main-container">
          <div className="carousel-arrow"><Arrow direction={'left'} slideHandler={this.slideHandler.bind(this)} /></div>
          <PrimaryPhoto photo={this.state.photos[this.state.activePhoto]} />
          <div className="carousel-arrow"><Arrow direction={'right'} slideHandler={this.slideHandler.bind(this)} /></div>
        </div>
      </div>
    )
  }
}

export default Carousel;