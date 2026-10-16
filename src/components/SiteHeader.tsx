import { NavLink } from 'react-router-dom';

export function SiteHeader() {
  return <header className="site-header">
    <a className="skip-link" href="#main">Skip to content</a>
    <NavLink to="/" className="brand" aria-label="Ian Campbell, home">IWC3<span className="brand-dot">.</span></NavLink>
    <nav className="site-nav" aria-label="Main navigation">
      <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
      <a href="/about#connect">Connect</a>
    </nav>
  </header>;
}
