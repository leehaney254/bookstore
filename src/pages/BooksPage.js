import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import Navigation from '../components/Navigation';
import { getBooks } from '../redux/apis/api';
import './BooksPage.css';

function BooksPage() {
  const { books } = useSelector((state) => state.books);
  // testing new library
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  // ends here
  let library = '';
  if (books.length === 0) {
    library = <h1>Loading...</h1>;
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
        <div className="horizontal-divider" />
        <Form />
      </main>
    </>
  );
}

export default BooksPage;
