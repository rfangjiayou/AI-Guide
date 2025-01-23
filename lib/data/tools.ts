export type Tool = {
  id: string;
  name: string;
  icon: string;
  description: string;
  rating: number;
  category: string;
  features: string[];
  website: string;
};

export function getTools(): Tool[] {
  return [
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      icon: '🤖',
      description: 'AI pair programmer that helps you write better code',
      rating: 5,
      category: 'code-generation',
      features: ['Code completion', 'Code explanation', 'Test generation'],
      website: 'https://copilot.github.com',
    },
    {
      id: 'tabnine',
      name: 'Tabnine',
      icon: '🚀',
      description: 'AI-powered code completion tool',
      rating: 4,
      category: 'code-completion',
      features: ['Multi-language support', 'Local AI model', 'Code suggestions'],
      website: 'https://www.tabnine.com',
    },
    // 更多工具...
  ];
}
