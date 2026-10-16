import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import './styles.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { if (window.location.hash) { requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView()); } else { window.scrollTo({ top: 0, behavior: 'instant' }); } }, [pathname]);
  return null;
}
function App() { return <BrowserRouter><ScrollToTop /><SiteHeader /><Routes><Route path="/" element={<Home />} /><Route path="/projects" element={<Projects />} /><Route path="/projects/:slug" element={<ProjectDetail />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Navigate to="/about#connect" replace />} /><Route path="*" element={<main id="main" className="content-page page-width"><h1>Page not found.</h1></main>} /></Routes><SiteFooter /></BrowserRouter>; }
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
