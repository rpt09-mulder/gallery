import React from 'react';
import PhotoGrid from './PhotoGrid/PhotoGrid.jsx';
import Carousel from './Carousel/Carousel.jsx';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: {
        photo1: {
          url: ''
        },
        photo2: {
          url: ''
        },
        photo3: {
          url: ''
        },
        photo4: {
          url: ''
        },
        photo5: {
          url: ''
        },
      },
      carouselActive: false
    }
  }

  componentDidMount() {
    let id;
    window.location.pathname !== '/' ? id = window.location.pathname : id = '1';

    fetch(`/photos${id}`)
    .then((res) => {
      return res.json();
    })
    .then((property) => {
      const photos = property.data[0].photos;
      this.setState({photos: {
        photo1: {
          url: photos[0].location
        },
        photo2: {
          url: photos[1].location
        },
        photo3: {
          url: photos[2].location
        },
        photo4: {
          url: photos[3].location
        },
        photo5: {
          url: photos[4].location
        }
      }})
    })
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

export default App;