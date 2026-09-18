import type { ProductStatus } from '../types/product';

export function StatusBadge({ status }: { status: ProductStatus }) {
  const label: Record<ProductStatus, string> = {
    'beta': 'BETA',
    'stable': '稳定',
    'coming-soon': '即将上线',
  };

  const className = {
    'beta': 'status-badge status-beta',
    'stable': 'status-badge status-stable',
    'coming-soon': 'status-badge status-coming',
  }[status];

  return <span className={className}>{label[status]}</span>;
}
