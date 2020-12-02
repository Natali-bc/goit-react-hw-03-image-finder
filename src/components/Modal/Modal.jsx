import React, { Component } from 'react';
import styles from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.props.closeModal}>
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
