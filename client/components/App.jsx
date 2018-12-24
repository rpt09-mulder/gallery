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
      console.log(photos);
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