import type { ProductConfig } from '../types/product';

type WorkflowStepsProps = {
  product: ProductConfig;
};

export function WorkflowSteps({ product }: WorkflowStepsProps) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-100 mb-4">
          使用流程
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          简单几步，即可接入 {product.name}。
        </p>

        <div className="flex-col gap-6">
          {product.steps.map((step, idx) => (
            <div key={step.title} className="card p-6 flex-start gap-4">
              <div className="flex-center flex-col w-8 h-8 rounded-lg bg-gradient-primary text-slate-950 font-bold text-sm">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
