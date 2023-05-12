import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Bookmark from './pages/bookmark/Bookmark';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import ProductImage from './components/productCard/ProductImage';
import Modal from './components/modal/Modal';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <main className=" px-[4.875rem]">
        <div className=" h-96">dsa</div>
        <div className=" h-96">dsa</div>
        <div className=" h-96">dsa</div>
        <div className=" h-96">dsa</div>
        <div className=" h-96">dsa</div>
        <div className=" h-96">dsa</div>
        <div className=" h-96">dsa</div>
      </main>
      <Modal />
      <ProductImage />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
