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
      <span className="bookSpace">Title:</span>
      {title}
      <span className="bookSpace">by:</span>
      {author}
      <button id={id} className="bookSpace" type="button" onClick={removeChangeHandler}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
