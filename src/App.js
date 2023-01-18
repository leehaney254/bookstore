import {
  Route, Routes,
} from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import Categories from './pages/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
