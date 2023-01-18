import './Form.css';

const Form = () => (
  <form>
    <label htmlFor="title" className="formlabel">
      <input type="text" id="title" name="title" placeholder="Enter the books title" />
    </label>
    <label htmlFor="author" className="formlabel">
      <input type="text" id="author" name="author" placeholder="Enter the books author" />
    </label>
    <button type="submit">Add Book</button>
  </form>
);

export default Form;
