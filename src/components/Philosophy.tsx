type PhilosophyProps = {
  titleLines: string[];
  description: string;
};

export function Philosophy({ titleLines, description }: PhilosophyProps) {
  return (
    <section className="section philosophy">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight">
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {i === titleLines.length - 1 ? (
                  <span className="text-gradient">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>
          <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
