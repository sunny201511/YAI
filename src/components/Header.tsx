import { NavLink } from 'react-router-dom';
import { brand } from '../config/products';
import { asset } from '../lib/assets';
import { GithubIcon } from './icons/Github';
import { MenuIcon } from './icons/Menu';
import { CloseIcon } from './icons/Close';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: '首页' },
    { to: '/products/customer-service', label: 'AI 客服' },
    { to: '/products/notebook', label: 'AI 笔记' },
    { to: '/#products', label: '产品矩阵' },
  ];

  return (
    <header className="relative sticky top-0 z-50 bg-white border-b border-border">
      <div className="container h-16 flex-between">
        {/* Left: Logo */}
        <a href="/" className="flex-center gap-2 text-primary font-semibold">
          <img src={asset('/images/logo/logo.svg')} alt={brand.name} width={36} height={36} />
          <span className="text-xl">{brand.name}</span>
        </a>

        {/* Center: Desktop nav (hidden on mobile) */}
        <nav className="hide-mobile nav-desktop" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className="text-sm text-tertiary hover:text-primary font-medium transition-colors"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: GitHub + CTA (hidden on mobile) */}
        <div className="hide-mobile flex-center gap-4">
          <a
            href={brand.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={brand.document}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm"
          >
            开始体验
          </a>
        </div>

        {/* Mobile hamburger (only visible on mobile) */}
        <button
          type="button"
          className="hide-desktop hamburger p-2 rounded-lg text-secondary hover:text-primary hover:bg-secondary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="hide-desktop mobile-menu"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => (e.key === 'Escape' ? setMenuOpen(false) : null)}
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className="mobile-menu-item"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={brand.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu-item flex-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <GithubIcon size={18} /> GitHub
            </a>
            <a
              href={brand.document}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu-cta btn btn-primary text-sm"
              onClick={() => setMenuOpen(false)}
            >
              开始体验
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
