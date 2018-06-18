import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
		id: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
		image_url: PropTypes.string,
    inventory: PropTypes.number
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>{this.props.overview}</h3>
        <h3>{this.props.release_date}</h3>
        <h3>{this.props.inventory}</h3>
      </div>
    );
  }
}

export default Movie;