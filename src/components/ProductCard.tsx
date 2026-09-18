import { Link } from 'react-router-dom';
import type { ProductConfig } from '../types/product';
import { asset } from '../lib/assets';
import { StatusBadge } from './StatusBadge';

type ProductCardProps = {
  product: ProductConfig;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.slug}`} className="block">
      <div className="card h-full flex-col">
        {/* Header: icon + name + status */}
        <div className="flex-between p-6 pb-3">
          <div className="flex-center gap-3">
            <img src={asset(product.icon)} alt={product.shortName} width={40} height={40} />
            <h3 className="text-xl font-bold text-primary">
              {product.shortName}
            </h3>
          </div>
          <StatusBadge status={product.status} />
        </div>

        {/* Preview */}
        <div className="px-6 pb-4">
          <div className="img-wrapper">
            <img src={asset(product.cover)} alt={product.shortName} />
          </div>
        </div>

        {/* Description */}
        <div className="px-6 pb-4">
          <p className="text-secondary text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Tags */}
        <div className="px-6 pb-4 flex flex-wrap gap-2">
          {product.features.slice(0, 4).map((feature) => (
            <span key={feature.title} className="tag text-xs">
              {feature.title}
            </span>
          ))}
        </div>

        {/* Footer action */}
        <div className="mt-auto p-6 pt-0 flex-between">
          <span className="text-sm font-medium text-accent-start">
            查看产品 →
          </span>
        </div>
      </div>
    </Link>
  );
}
