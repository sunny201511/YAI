import { brand } from '../config/products';

type CTASectionProps = {
  title: string;
  subtitle: string;
};

export function CTASection({ title, subtitle }: CTASectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-section">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-secondary mb-8 text-lg leading-relaxed">
            {subtitle}
          </p>
          <a
            href={brand.document}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            开始体验
          </a>
        </div>
      </div>
    </section>
  );
}
