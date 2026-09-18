import { Link } from 'react-router-dom';
import { asset } from '../lib/assets';

type HeroProps = {
  eyebrow: string;
  titleLines: string[];
  subtitle: string;
  primaryLabel: string;
  primaryTo?: string;
  secondaryLabel: string;
  secondaryHref: string;
  imageSrc: string;
  imageAlt: string;
};

export function Hero({
  eyebrow,
  titleLines,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryHref,
  imageSrc,
  imageAlt,
}: HeroProps) {
  const Primary = primaryTo ? (
    <Link to={primaryTo} className="btn btn-primary">
      {primaryLabel}
    </Link>
  ) : (
    <a href={secondaryHref} className="btn btn-primary">
      {primaryLabel}
    </a>
  );

  return (
    <section className="section pt-header hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {i === 0 ? line : <span className="text-gradient">{line}</span>}
                </span>
              ))}
            </h1>
            <p className="text-lg text-secondary mb-6 max-w-xl leading-relaxed">
              {subtitle}
            </p>
            <div className="hero-cta">
              {Primary}
              <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="text-sm text-tertiary hover:text-accent-start font-medium transition-colors">
                {secondaryLabel}
              </a>
            </div>
          </div>
          <div className="hero-preview">
            <div className="img-wrapper shadow-elevated">
              <img src={asset(imageSrc)} alt={imageAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
