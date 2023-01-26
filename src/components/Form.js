import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';
import './Form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [formIsNotValid, setformIsNotValid] = useState(false);
  const dispatch = useDispatch();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === '' || author.trim() === '') {
      setformIsNotValid(true);
      return;
    }
    setformIsNotValid(false);
    const payload = {
      id: uuid(),
      title,
      author,
    };

    dispatch(addBook(payload));
    setAuthor('');
    setTitle('');
  };

  return (
    <>
      <h2 id="formtitle">ADD NEW BOOK</h2>
      <form id="form" onSubmit={submitHandler}>
        <label htmlFor="title" className="formwidth">
          <input type="text" id="title" className="input" value={title} onChange={titleChangeHandler} name="title" placeholder="Book title" />
        </label>
        <label htmlFor="author" className="formwidth">
          <input type="text" id="author" className="input" value={author} onChange={authorChangeHandler} name="author" placeholder="Book author" />
        </label>
        <button className="primaryButton" type="submit">ADD BOOK</button>
        {formIsNotValid && <div id="warning">Do not leave any empty fields</div>}
      </form>
    </>
  );
};

export default Form;
