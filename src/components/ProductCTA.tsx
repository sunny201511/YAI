import type { ProductConfig } from '../types/product';

type CTAProps = {
  product: ProductConfig;
};

export function ProductCTA({ product }: CTAProps) {
  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
          准备开始使用 {product.shortName}？
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          立即体验 {product.name}，体验 AI 在工作流程中的真正价值。
        </p>
        <div className="flex-center gap-3 flex-wrap">
          <a href={product.hero.primaryHref} className="btn btn-primary">
            {product.hero.primaryLabel}
          </a>
          <a href={product.hero.secondaryHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {product.hero.secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
