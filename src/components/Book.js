import './Book.css';

const Book = (props) => {
  // eslint-disable-next-line react/prop-types
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
};

export default Book;
