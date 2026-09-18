import { Link } from 'react-router-dom';
import { brand } from '../config/products';
import { asset } from '../lib/assets';
import { GithubIcon } from './icons/Github';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-white mt-auto">
      <div className="container py-12 flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">
        {/* Brand */}
        <div className="flex-col gap-4 min-w-200">
          <div className="flex-center gap-2">
            <img src={asset('/images/logo/logo.svg')} alt={brand.name} width={32} height={32} />
            <span className="font-bold text-xl text-primary">{brand.name}</span>
          </div>
          <p className="text-sm text-tertiary">
            {brand.tagline}
          </p>
        </div>

        {/* Products */}
        <div className="flex-col gap-2 min-w-150">
          <h4 className="font-semibold text-primary mb-3 text-sm">产品</h4>
          <Link to="/products/customer-service" className="block py-1 text-sm text-secondary hover:text-primary transition-colors">AI 客服</Link>
          <Link to="/products/notebook" className="block py-1 text-sm text-secondary hover:text-primary transition-colors">AI 笔记</Link>
          <Link to="/#products" className="block py-1 text-sm text-secondary hover:text-primary transition-colors">产品矩阵</Link>
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
          <p>© {year} {brand.name}。</p>
          <p>All rights reserved.</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-border pt-6 mt-8">
        <p className="text-xs text-muted text-center leading-relaxed max-w-3xl mx-auto">
          © 2026 {brand.name}｜本网站为开源项目文档与展示站点，托管于 GitHub Pages。
          本站主要用于介绍开源工具、展示功能与技术文档；页面含外部链接，指向独立运营的商业增值服务，本站本身不提供在线交易、SaaS 托管服务。
          开源代码遵循 MIT 协议。
          GitHub® 是 GitHub, Inc. 的商标，本项目与 GitHub 公司无任何隶属关系。
          使用本工具产生的风险由使用者自行承担。
        </p>
      </div>
    </footer>
  );
}
