import React, {Component} from 'react';
import '../../assets/TitleText.css';

export class TitleText extends Component {
  render() {
    const {text, styles} = this.props;

    if (text) {
      return (
        <h1
          className="title-text"
          style={styles}
        >
          {text}
        </h1>
      );
    }
    return null;
  }
}

export default TitleText;
