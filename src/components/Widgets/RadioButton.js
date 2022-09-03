import React, {Component} from 'react';
import '../../assets/RadioButtonContainer.css';
export class RadioButton extends Component {
  render() {
    const {id, value, text} = this.props;
    return (
      <>
        <label className='description-text' htmlFor={{id}}>
          <input type='radio' id={{id}} value={{value}} className='rdb-style'/>
          {text}
        </label>
      </>
    );
  }
}
export default RadioButton;
