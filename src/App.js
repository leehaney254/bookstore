import {
  Route, Routes,
} from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import Categories from './pages/Categories';
import './App.css';

function App() {
  return (
    <main id="storeColor">
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </main>
  );
}

export default App;
