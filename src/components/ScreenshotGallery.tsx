import type { ProductConfig } from '../types/product';
import { ProductImage } from './ProductImage';

type ScreenshotGalleryProps = {
  product: ProductConfig;
};

export function ScreenshotGallery({ product }: ScreenshotGalleryProps) {
  const primary = product.screenshots[0];
  const rest = product.screenshots.slice(1);

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-100 mb-4">
          界面预览
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          未来替换为真实产品截图，布局将自动适配。
        </p>

        <div className="grid-2 gap-6">
          <div className="img-wrapper">
            <ProductImage
              src={primary}
              alt={`${product.name} 主界面`}
              aspectRatio="16/9"
              cover
            />
          </div>
          <div className="flex-col gap-3">
            {rest.map((src, idx) => (
              <div key={src} className="img-wrapper">
                <ProductImage
                  src={src}
                  alt={`${product.name} 截图 ${idx + 2}`}
                  aspectRatio="16/9"
                  cover
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
