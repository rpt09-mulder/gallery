import React from 'react';
import PhotoGrid from './PhotoGrid/PhotoGrid.jsx';
import Carousel from './Carousel/Carousel.jsx';
import Nav from './Nav/Nav.jsx';
import './App.css';

const serviceLocation = 'http://photos.urvjp33d4m.us-west-2.elasticbeanstalk.com';

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
    window.location.pathname !== '/' ? id = window.location.pathname : id = '/1';

    fetch(`${serviceLocation}/photos${id}`)
      .then((res) => {
        return res.json();
      })
      .then((property) => {
        const photos = property.data[0].photos;
        this.setState({
          photos: {
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
          },
          clicked: 1
        })
      })
  }

  toggleCarousel(e) {
    const clickedId = parseInt(e.target.id.slice(5)) - 1;
    this.state.carouselActive ? this.setState({ carouselActive: false, clicked: 1 }) : this.setState({ carouselActive: true, clicked: clickedId });
  }

  render() {
    if (this.state.carouselActive) {
      return (
        <div>
          <div>
            <Nav />
          </div>
          <div>
            <Carousel photos={this.state.photos} clicked={this.state.clicked} toggleCarousel={this.toggleCarousel.bind(this)} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            <Nav />
          </div>
          <div>
            <PhotoGrid photos={this.state.photos} toggleCarousel={this.toggleCarousel.bind(this)} />
          </div>
        </div>
      )
    }
  }
}

export default App;