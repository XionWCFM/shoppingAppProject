import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Bookmark from './pages/bookmark/Bookmark';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Products from './pages/products/Products';
import ToastContainer from './components/toast/ToastContainer';
import Modal from './components/modal/Modal';
import BackDrop from './components/modal/BackDrop';
import ModalImage from './components/modal/ModalImage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Modal>
        <>
          <BackDrop />
          <ModalImage />
        </>
      </Modal>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/products/:filterlist" element={<Products />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
