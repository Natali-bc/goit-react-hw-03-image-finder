import React, { Component } from 'react';
import style from '../Searchbar/Searchbar.module.css';
import styles from '../SearchForm/SearchForm.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputValue: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={inputValue}
            onChange={this.handleChange}
            className={styles.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
