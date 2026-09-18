import { brand } from '../config/products';
import { GithubIcon } from './icons/Github';

export function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-auto">
      <div className="container py-12 flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">
        {/* Brand */}
        <div className="flex-col gap-4 min-w-200">
          <div className="flex-center gap-2">
            <img src="/images/logo/logo.svg" alt={brand.name} width={32} height={32} />
            <span className="font-bold text-xl text-primary">{brand.name}</span>
          </div>
          <p className="text-sm text-tertiary">
            {brand.tagline}
          </p>
        </div>

        {/* Products */}
        <div className="flex-col gap-2 min-w-150">
          <h4 className="font-semibold text-primary mb-3 text-sm">产品</h4>
          <a href="/products/customer-service" className="block py-1 text-sm text-secondary hover:text-primary transition-colors">AI 客服</a>
          <a href="/products/notebook" className="block py-1 text-sm text-secondary hover:text-primary transition-colors">AI 笔记</a>
          <a href="/#products" className="block py-1 text-sm text-secondary hover:text-primary transition-colors">产品矩阵</a>
        </div>

        {/* Resources */}
        <div className="flex-col gap-2 min-w-150">
          <h4 className="font-semibold text-primary mb-3 text-sm">资源</h4>
          <a href={brand.github} target="_blank" rel="noopener noreferrer" className="flex-center gap-2 py-1 text-sm text-secondary hover:text-primary transition-colors">
            <GithubIcon size={16} /> GitHub
          </a>
          <a href={brand.document} target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-secondary hover:text-primary transition-colors">文档</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-muted sm:mt-0">
          <p>© {new Date().getFullYear()} {brand.name}.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
