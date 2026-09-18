import { useState } from 'react';

export type ProductImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  /** Aspect ratio: "16/9" or "4/3" or "auto". When not auto, image uses object-contain and a fixed-height box. */
  aspectRatio?: '16/9' | '4/3' | 'auto';
  /** If true, renders the image at a fixed width with cover cropping. Default false. */
  cover?: boolean;
  /** Placeholder background shown while loading or on error. */
  placeholder?: boolean;
};

const aspectRatioClass = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  auto: '',
};

export function ProductImage({
  src,
  alt,
  aspectRatio = '16/9',
  cover = false,
  placeholder = true,
  className = '',
  ...rest
}: ProductImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const objectFit = cover ? 'object-cover' : 'object-contain';
  const ratioClass = aspectRatioClass[aspectRatio] || '';
  const baseClasses = `w-full h-auto ${objectFit} transition-opacity duration-300 ${ratioClass}`;

  // On error, fall back to a simple placeholder block instead of a broken image icon.
  if (error) {
    if (!placeholder) return null;
    return (
      <div
        className={`flex-center flex-col gap-3 text-center muted bg-slate-900/50 border border-slate-800 ${
          aspectRatio === '16/9'
            ? 'aspect-video'
            : aspectRatio === '4/3'
            ? 'aspect-[4/3]'
            : ''
        } rounded-xl`}
      >
        <span className="text-sm">图片加载失败</span>
        <span className="text-xs opacity-70 break-all">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={rest.loading ?? 'lazy'}
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
      className={`${baseClasses} ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...rest}
    />
  );
}
