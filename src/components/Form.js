import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [formIsNotValid, setformIsNotValid] = useState(false);

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
    console.log(title);
    console.log(author);
  };

  return (
    <>
      <h2 className="formlabel">Add New book</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="title" className="formlabel">
          <input type="text" id="title" value={title} onChange={titleChangeHandler} name="title" placeholder="Title" />
        </label>
        <label htmlFor="author" className="formlabel">
          <input type="text" id="author" value={author} onChange={authorChangeHandler} name="author" placeholder="Author" />
        </label>
        <button type="submit">Add Book</button>
        {formIsNotValid && <div id="warning">Do not leave any empty fields</div>}
      </form>
    </>
  );
};

export default Form;
