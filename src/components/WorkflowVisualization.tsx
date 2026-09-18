type WorkflowStep = {
  title: string;
  description: string;
};

type WorkflowVisualizationProps = {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
};

export function WorkflowVisualization({
  title,
  subtitle,
  steps,
}: WorkflowVisualizationProps) {
  return (
    <section className="section">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="eyebrow">工作流程</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Horizontal workflow */}
        <div className="workflow-line">
          {steps.map((step, i) => (
            <div key={step.title} className="flex-center gap-2">
              <div className="flex-center flex-col">
                <div className="workflow-node">{i + 1}</div>
                <div className="workflow-label">{step.title}</div>
                <p className="text-xs text-tertiary text-center max-w-24 hide-mobile">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span className="hide-mobile workflow-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
