import { Link } from 'react-router-dom';
import { products } from '../config/products';

const capabilities = [
  {
    key: 'customer-service',
    icon: products.customerService.icon,
    name: products.customerService.shortName,
    description: '智能应答、知识库、客服自动化，让客户服务始终在线。',
    features: ['智能客服', 'AI 回复', '知识库'],
    status: products.customerService.status,
  },
  {
    key: 'notebook',
    icon: products.notebook.icon,
    name: products.notebook.shortName,
    description: '记录、整理、总结，让你的知识沉淀并持续演进。',
    features: ['智能笔记', 'AI 对话', '长期记忆'],
    status: products.notebook.status,
  },
  {
    key: 'agent',
    icon: '/images/common/agent-icon.svg',
    name: 'AI Agent',
    description: '让 AI 自动完成真正的工作任务，正在紧张开发中。',
    features: ['即将上线'],
    status: 'coming-soon',
  },
];

export function CapabilityShowcase() {
  return (
    <section className="section">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="eyebrow">产品能力</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            一个工作台，多个 AI 能力
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            YAI 将 AI 客服、AI 笔记与后续的 AI Agent 连接在同一个工作台，
            让 AI 从“对话”走向真正的工作。
          </p>
        </div>

        <div className="cap-grid">
          {capabilities.map((cap) => (
            <Link
              key={cap.key}
              to={
                cap.key === 'agent' ? '#' : `/products/${cap.key}`
              }
              className={`cap-card ${cap.status === 'coming-soon' ? 'cap-coming' : ''}`}
            >
              <div className="flex-center gap-3 mb-4">
                <img src={cap.icon} alt={cap.name} width={36} height={36} />
                <h3 className="text-xl font-bold text-primary">{cap.name}</h3>
              </div>
              <p className="text-sm text-secondary mb-4 leading-relaxed line-clamp-2">
                {cap.description}
              </p>
              <div className="flex-wrap">
                {cap.features.map((feature) => (
                  <span key={feature} className="tag">
                    {feature}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
