import React, {Component} from 'react';

export class Image extends Component {
  render() {
    const {image, altImage, width, height, styles} = this.props;

    if (image) {
      return (
        <img
          src={image}
          alt={altImage}
          width={width || 'auto'}
          height={height || 'auto'}
          style={styles}
        />
      );
    }
    return null;
  }
}

export default Image;
