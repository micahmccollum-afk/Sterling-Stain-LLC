import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F7F4EF] flex flex-col pb-24 md:pb-0">
        <FloatingCallButton />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
