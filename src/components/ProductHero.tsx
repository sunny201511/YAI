import { Link } from 'react-router-dom';
import type { ProductConfig } from '../types/product';
import { asset } from '../lib/assets';
import { ProductImage } from './ProductImage';
import { StatusBadge } from './StatusBadge';

type ProductHeroProps = {
  product: ProductConfig;
};

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="section pt-header hero">
      <div className="container">
        <div className="hero-inner items-center gap-12">
          <div className="hero-text">
            <span className="eyebrow">AI 产品</span>
            <div className="flex-center gap-3 mb-4">
              <img src={asset(product.icon)} alt={product.shortName} width={48} height={48} />
              <span className="text-3xl font-bold text-primary">{product.name}</span>
              <StatusBadge status={product.status} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              <span className="text-gradient">{product.hero.title}</span>
            </h1>
            <p className="text-lg text-secondary mb-6 max-w-xl leading-relaxed">
              {product.hero.subtitle}
            </p>
            <p className="text-sm text-tertiary mb-6 max-w-xl leading-relaxed">
              {product.hero.description}
            </p>

            <div className="hero-cta">
              <a href={product.hero.primaryHref} className="btn btn-primary">
                {product.hero.primaryLabel}
              </a>
              <Link to="/" className="text-sm text-tertiary hover:text-accent-start font-medium transition-colors">
                返回首页
              </Link>
            </div>
          </div>
          <div className="hero-preview">
            <div className="img-wrapper shadow-elevated">
              <ProductImage
                src={product.hero.image}
                alt={product.name}
                cover
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
