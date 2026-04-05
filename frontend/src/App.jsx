import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageLayout>
              <About />
            </PageLayout>
          } 
        />
        <Route 
          path="/services" 
          element={
            <PageLayout>
              <Services />
            </PageLayout>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <PageLayout>
              <Portfolio />
            </PageLayout>
          } 
        />
        <Route 
          path="/pricing" 
          element={
            <PageLayout>
              <Pricing />
            </PageLayout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageLayout>
              <Contact />
            </PageLayout>
          } 
        />
        {/* Redirect for unknown routes */}
        <Route 
          path="*" 
          element={
            <PageLayout>
              <div className="pt-60 pb-80 text-center">
                <h1 className="text-9xl font-black text-white/5 absolute left-1/2 -top-20 -translate-x-1/2 select-none pointer-events-none">404</h1>
                <h2 className="text-6xl font-bold text-white mb-6 relative z-10">Lost in the Matrix?</h2>
                <p className="text-slate-400 text-xl mb-12 relative z-10">The digital coordinate you're looking for doesn't exist.</p>
                <a href="/" className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl relative z-10">Back to Origin</a>
              </div>
            </PageLayout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
