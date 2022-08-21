import React, {Component} from 'react';
import '../../assets/DefaultContainer.css';
import {TitleText} from '../Texts/TitleText';
import {Image} from './Image';

export class DefaultContainer extends Component {
  renderText() {
    const {text, textSize} = this.props;
    if (text) {
      return (
        <TitleText
          text={text}
          styles={{marginLeft: '5px', fontSize: textSize}}
        />
      );
    }
    return null;
  }

  renderImage() {
    const {image, altImage} = this.props;
    if (image) {
      return (
        <Image image={image} altImage={altImage} width='auto' height='auto'/>
      );
    }
    return null;
  }

  renderHeader() {
    return (
      <div style={{
        display: 'flex',
        marginTop: '20px',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'baseline',
        marginLeft: '20px'
      }}
      >
        {this.renderImage()}
        {this.renderText()}
      </div>
    );
  }

  render() {
    const {children, styles} = this.props;

    if (children) {
      return (
        <div
          className="default-container"
          style={styles}
        >
          {this.renderHeader()}
          {children}
        </div>
      );
    }
    return null;
  }
}

export default DefaultContainer;
