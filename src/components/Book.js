import React from 'react';
import { PropTypes } from 'prop-types';
import './Book.css';

function Book(props) {
  const { author, title } = props;
  return (
    <div id="book">
      Title:
      {title}
      by:
      {author}
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
