import { products, brand } from '../config/products';
import { Hero } from '../components/Hero';
import { CapabilityShowcase } from '../components/CapabilityShowcase';
import { ProductCard } from '../components/ProductCard';
import { WorkflowVisualization } from '../components/WorkflowVisualization';
import { Philosophy } from '../components/Philosophy';
import { CTASection } from '../components/CTASection';

export function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero
        eyebrow={brand.tagline}
        titleLines={['AI，不只是聊天。', '让 AI 真正进入你的工作流。']}
        subtitle="YAI 将 AI 客服、AI 笔记与更多正在构建中的 AI 工具连接在同一个工作台，让 AI 从对话走向真正的工作。"
        primaryLabel="立即体验"
        primaryTo="/products/customer-service"
        secondaryLabel="GitHub"
        secondaryHref={brand.github}
        imageSrc="/images/hero/hero-window.svg"
        imageAlt="YAI 工作台预览"
      />

      {/* Capability showcase */}
      <CapabilityShowcase />

      {/* Product matrix section */}
      <section className="section" id="products">
        <div className="container">
          <div className="text-center mb-12">
            <span className="eyebrow">产品矩阵</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              AI 产品矩阵
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              从对话，到记录，再到执行，
              让 AI 逐步进入真实工作流。
            </p>
          </div>

          <div className="grid-2 gap-8">
            {Object.values(products).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow visualization */}
      <WorkflowVisualization
        title="AI 进入你的工作流程"
        subtitle="输入 → AI 理解 → AI 处理 → 结果沉淀"
        steps={[
          { title: '输入', description: '通过对话、语音或粘贴记录信息。' },
          { title: 'AI 理解', description: '解析意图，检索知识库。' },
          { title: 'AI 处理', description: '生成回复、总结或执行任务。' },
          { title: '结果沉淀', description: '沉淀为可检索的知识并触发后续流程。' },
        ]}
      />

      {/* Philosophy section */}
      <Philosophy
        titleLines={['从 Chat，', '到 Work。']}
        description="AI 的价值不应该停留在回答问题，而应该真正进入你的工作流程。YAI 让 AI 参与真实工作，而不是只是聊天。"
      />

      {/* Bottom CTA */}
      <CTASection
        title="准备好让 AI 进入你的工作流了吗？"
        subtitle="立即体验 AI 客服与 AI 笔记，感受真正进入工作流的 AI。"
      />
    </>
  );
}
