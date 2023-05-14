import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Bookmark from './pages/bookmark/Bookmark';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import List from './pages/products/List';
import { cozShoppingAPI } from './modules/cozShoppingAPI';

const App = () => {
  console.log(cozShoppingAPI);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/products/list" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
