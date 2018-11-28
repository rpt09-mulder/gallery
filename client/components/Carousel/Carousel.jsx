import Arrow from './Arrow.jsx';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div id="carousel" onClick={this.props.toggleCarousel}>
        <div id="carousel-main-container">
          <div className="carousel-arrow-left"><Arrow direction={'left'}/></div>
          <div className="carousel-primary-photo">Item 2</div>
          <div className="carousel-arrow-right"><Arrow direction={'right'}/></div>

        </div>
      </div>
    )
  }
}

module.exports = Carousel;