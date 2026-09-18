import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductBySlug } from '../config/products';
import { asset } from '../lib/assets';
import { ProductHero } from '../components/ProductHero';
import { Features } from '../components/Features';
import { WorkflowSteps } from '../components/WorkflowSteps';
import { ScreenshotGallery } from '../components/ScreenshotGallery';
import { ProductCTA } from '../components/ProductCTA';
import { StatusBadge } from '../components/StatusBadge';

export function Product() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    // Redirect to home if product not found
    if (slug) {
      navigate('/', { replace: true });
    }
    return null;
  }

  return (
    <>
      <ProductHero product={product} />

      <section className="section">
        <div className="container max-w-4xl mx-auto flex-center flex-col gap-4 mb-6">
          <div className="flex-center gap-3">
            <img src={asset(product.icon)} alt={product.shortName} width={48} height={48} />
            <h1 className="text-3xl font-bold text-slate-100">{product.name}</h1>
            <StatusBadge status={product.status} />
          </div>
          <p className="text-center text-slate-300 leading-relaxed max-w-2xl">
            {product.hero.subtitle}
          </p>
        </div>
      </section>

      <Features product={product} />
      <WorkflowSteps product={product} />
      <ScreenshotGallery product={product} />
      <ProductCTA product={product} />

      <div className="container pb-16 text-center">
        <Link to="/" className="btn btn-ghost">
          ← 返回首页
        </Link>
      </div>
    </>
  );
}
