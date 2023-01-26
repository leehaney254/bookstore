import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Progress from './Progress';
import './Book.css';

function Book(props) {
  const { author, title, id } = props;
  const dispatch = useDispatch();

  const removeChangeHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <div className="book">
      <div className="book-content">
        <div className="book-info">
          <h4 className="book-category">Action</h4>
          <h2 className="book-title">{title}</h2>
          <h6 className="book-author">{author}</h6>
          <div className="action-buttons">
            <button className="button-outline" type="button">Comments</button>
            <div className="vertical-divider" />
            <button id={id} className="button-outline" type="button" onClick={removeChangeHandler}>Remove</button>
            <div className="vertical-divider" />
            <button className="button-outline" type="button">Edit</button>
          </div>
        </div>
        <Progress />
      </div>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
