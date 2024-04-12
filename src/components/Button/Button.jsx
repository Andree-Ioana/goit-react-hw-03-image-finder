// Button.js
import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    const { onClick } = this.props;
    return <button onClick={onClick} className={styles.button} >Load more</button>;
  }
}

export default Button;
