'use client';

import { ToolGrid } from '@/components/ai/ToolGrid';
import { getTools } from '@/lib/data/tools';
import { useLanguage } from '@/components/language-provider';
import { getDictionary } from '@/i18n';
import { useTheme } from 'next-themes';

export default function AIPage() {
  const { language } = useLanguage();
  const t = getDictionary(language);
  const { theme } = useTheme();
  const tools = getTools();

  // 定义不同主题下的背景颜色
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300`}>
      <div className="container py-12">
        <h1
          className={`mb-8 text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
        >
          {t.ai.title}
        </h1>
        <ToolGrid tools={tools} />
      </div>
    </div>
  );
}
