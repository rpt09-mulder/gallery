import React from 'react';
import PhotoGrid from './PhotoGrid/PhotoGrid.jsx';
import Carousel from './Carousel/Carousel.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: {
        photo1: {
          url: 'https://picsum.photos/800/800/?image=172'
        },
        photo2: {
          url: 'https://picsum.photos/800/800/?image=271'
        },
        photo3: {
          url: 'https://picsum.photos/800/800/?image=370'
        },
        photo4: {
          url: 'https://picsum.photos/800/800/?image=473'
        },
        photo5: {
          url: 'https://picsum.photos/800/800/?image=577'
        },
      },
      carouselActive: true
    }
  }

  toggleCarousel() {
    this.state.carouselActive ? this.setState({carouselActive: false}) : this.setState({carouselActive: true});
  }

  render() {

    if(this.state.carouselActive) {
      return (
        <div>
          <Carousel toggleCarousel={this.toggleCarousel.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div>
          <PhotoGrid photos={this.state.photos} toggleCarousel={this.toggleCarousel.bind(this)} />
        </div>
      )
    }
  }
}

module.exports = App;