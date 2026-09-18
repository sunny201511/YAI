import type { ProductConfig, ProductsConfig } from '../types/product';

export const products = {
  customerService: {
    slug: 'customer-service',
    name: 'AI 客服',
    shortName: 'AI 客服',
    description: '让 AI 参与客户服务的每一个环节，包括智能客服、AI 回复、知识库、客户管理、工单、SLA、订单与库存。',
    status: 'beta',
    icon: '/images/customer-service/icon.svg',
    cover: '/images/customer-service/cover.png',
    hero: {
      title: 'AI 客服',
      subtitle: '让 AI 参与客户服务的每一个环节。',
      description: '智能客服、AI 回复、知识库、客户管理、工单、SLA、订单与库存，让客户服务更高效、更智能。',
      primaryLabel: '立即体验',
      primaryHref: '#',
      secondaryLabel: 'GitHub',
      secondaryHref: 'https://github.com/sunny201511/YAI',
      image: '/images/customer-service/screenshot.png',
    },
    screenshots: [
      '/images/customer-service/screenshot.png',
      '/images/customer-service/screenshot-chat.png',
      '/images/customer-service/screenshot-workbench.png',
    ],
    features: [
      {
        title: '智能客服',
        description: '24/7 自动理解用户意图，实时响应客户咨询。',
      },
      {
        title: 'AI 回复',
        description: '多轮对话驱动的智能问答，支持多轮上下文理解。',
      },
      {
        title: '知识库',
        description: '集成企业知识库，确保回答的准确性与一致性。',
      },
      {
        title: '客户管理',
        description: '统一客户视图，自动记录沟通历史。',
      },
      {
        title: '工单系统',
        description: '智能归类与派单，提升处理效率。',
      },
      {
        title: 'SLA 管理',
        description: '自动监控服务等级，保障响应时效。',
      },
      {
        title: '订单查询',
        description: '无缝连接 ERP，实时查询订单与库存。',
      },
      {
        title: '库存感知',
        description: '实时库存状态感知，减少缺货沟通。',
      },
    ],
    steps: [
      {
        title: '客户咨询',
        description: '客户通过任意渠道提出咨询，AI 实时感知并理解意图。',
      },
      {
        title: '知识检索',
        description: 'AI 检索企业知识库，匹配最准确的答案。',
      },
      {
        title: '智能响应',
        description: '生成符合品牌语调的回复，或自动创建工单。',
      },
      {
        title: '人工协作',
        description: '复杂问题无缝接入人工坐席，保障服务质量。',
      },
    ],
  },

  notebook: {
    slug: 'notebook',
    name: 'AI 笔记',
    shortName: 'AI 笔记',
    description: '从记录信息到让 AI 理解你的知识，从记录信息到让 AI 理解你的知识，包括智能笔记、AI 对话、长期记忆、Agent 功能、知识检索与语音。',
    status: 'beta',
    icon: '/images/notebook/icon.svg',
    cover: '/images/notebook/cover.png',
    hero: {
      title: 'AI 笔记',
      subtitle: '从记录信息，到让 AI 理解你的知识。',
      description: '智能笔记、AI 对话、长期记忆、Agent 功能、知识检索与语音，让你的知识更有组织、更易使用。',
      primaryLabel: '立即体验',
      primaryHref: '#',
      secondaryLabel: 'GitHub',
      secondaryHref: 'https://github.com/sunny201511/YAI',
      image: '/images/notebook/screenshot.png',
    },
    screenshots: [
      '/images/notebook/screenshot.png',
      '/images/notebook/screenshot-editor.png',
      '/images/notebook/screenshot-ai.png',
    ],
    features: [
      {
        title: '智能笔记',
        description: '自动结构化你的记录，生成带标签的知识库。',
      },
      {
        title: 'AI 对话',
        description: '基于笔记内容与 AI 对话，获取个性化见解。',
      },
      {
        title: '长期记忆',
        description: 'AI 记录你的笔记习惯，逐步理解你的知识地图。',
      },
      {
        title: 'Agent 工具',
        description: '调用笔记、搜索、代码等 Agent 工具，自动完成任务。',
      },
      {
        title: '知识检索',
        description: '语义搜索与向量检索，快速定位你的笔记内容。',
      },
      {
        title: '语音录入',
        description: '语音转写录音与讲话内容，沉浸式记录。',
      },
    ],
    steps: [
      {
        title: '记录信息',
        description: '通过编辑器、语音或粘贴快速记录灵感与知识。',
      },
      {
        title: 'AI 理解',
        description: 'AI 解析内容，提取关键信息并建立关联。',
      },
      {
        title: '沉淀知识',
        description: '自动分类并建立可检索的知识库。',
      },
      {
        title: '智能对话',
        description: '通过对话探索笔记中的深层洞见。',
      },
    ],
  },
} as const satisfies ProductsConfig;

export const productList = Object.values(products);

export function getProductBySlug(slug: string): ProductConfig | undefined {
  return Object.values(products).find((product) => product.slug === slug);
}

// Brand-level configuration
export const brand = {
  name: 'YAI',
  shortName: 'YAI',
  tagline: 'AI，不只是聊天。',
  description: '我们正在构建一系列真正进入工作流的 AI 产品。',
  github: 'https://github.com/sunny201511/YAI',
  document: 'https://github.com/sunny201511/YAI/blob/main/README.md',
};
