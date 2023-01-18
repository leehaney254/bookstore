import Book from '../components/Book';
import Form from '../components/Form';

const books = [
  {
    id: 1,
    title: ' The Catcher in the Rye ',
    author: ' J.D. Salinger ',
  },
  {
    id: 2,
    title: ' To Kill a Mockingbird ',
    author: ' Harper Lee ',
  },
  {
    id: 3,
    title: ' The Great Gatsby ',
    author: ' F. Scott Fitzgerald ',
  },
  {
    id: 4,
    title: ' One Hundred Years of Solitude ',
    author: ' Gabriel Garcia Marquez ',
  },
  {
    id: 5,
    title: ' The Lord of the Rings ',
    author: ' J.R.R. Tolkien ',
  },
];

const BooksPage = () => {
  const library = books.map((book) => (
    <Book key={book.id} title={book.title} author={book.author} />
  ));
  return (
    <main>
      {library}
      <Form />
    </main>
  );
};

export default BooksPage;
