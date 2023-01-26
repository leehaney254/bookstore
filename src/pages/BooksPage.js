import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import Navigation from '../components/Navigation';
import './BooksPage.css';

function BooksPage() {
  const books = useSelector((state) => state.BooksReducer);
  let library = '';
  if (books.length === 0) {
    library = <h1>There are no books to show</h1>;
  } else {
    library = books.map((book) => (
      <Book key={book.id} id={book.id} title={book.title} author={book.author} />
    ));
  }

  return (
    <>
      <Navigation />
      <main id="bookSpacing">
        <div id="books">
          {library}
        </div>
        <Form />
      </main>
    </>
  );
}

export default BooksPage;
