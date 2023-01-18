import './Form.css';

const Form = () => (
  <>
    <h2 className="formlabel">Add New book</h2>
    <form>
      <label htmlFor="title" className="formlabel">
        <input type="text" id="title" name="title" placeholder="Title" />
      </label>
      <label htmlFor="author" className="formlabel">
        <input type="text" id="author" name="author" placeholder="Author" />
      </label>
      <button type="submit">Add Book</button>
    </form>
  </>
);

export default Form;
