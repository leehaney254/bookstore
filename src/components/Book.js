import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

function Book(props) {
  const { author, title, id } = props;
  const dispatch = useDispatch();

  const removeChangeHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <div id="book">
      Title:
      {title}
      by:
      {author}
      <button id={id} type="button" onClick={removeChangeHandler}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
