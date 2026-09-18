import type { ProductConfig } from '../types/product';
import { ProductImage } from './ProductImage';

type FeaturesProps = {
  product: ProductConfig;
};

export function Features({ product }: FeaturesProps) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-100 mb-4">
          核心功能
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          {product.hero.subtitle}
        </p>
        <div className="grid-3">
          {product.features.map((feature) => (
            <div key={feature.title} className="card p-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
