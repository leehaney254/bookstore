import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import Navigation from '../components/Navigation';

function BooksPage() {
  const books = useSelector((state) => state.BooksReducer);
  const library = books.map((book) => (
    <Book key={book.id} id={book.id} title={book.title} author={book.author} />
  ));
  return (
    <>
      <Navigation />
      <main>
        {library}
        <Form />
      </main>
    </>
  );
}

export default BooksPage;
