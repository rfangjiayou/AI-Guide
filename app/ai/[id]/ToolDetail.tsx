'use client';

import { notFound } from 'next/navigation';
import { Tool } from '@/lib/data/tools';
import { useLanguage } from '@/components/language-provider';
import { useTheme } from 'next-themes';
import { getDictionary } from '@/i18n';

export default function ToolDetailPage({ tool }: { tool: Tool }) {
  const { language } = useLanguage();
  const t = getDictionary(language);
  const { theme } = useTheme();

  if (!tool) {
    notFound();
  }

  // 定义不同主题下的颜色
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300`}>
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* 标题部分 */}
          <div className="mb-8 flex items-center gap-4">
            <div className="text-5xl">{tool.icon}</div>
            <h1 className={`text-4xl font-bold ${textColor}`}>{tool.name}</h1>
          </div>

          {/* 评分和分类 */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex items-center gap-1 text-yellow-400">
              {'★'.repeat(tool.rating).padEnd(5, '☆')}
            </div>
            <span
              className={`rounded-full px-3 py-1 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              } ${secondaryTextColor}`}
            >
              {tool.category}
            </span>
          </div>

          {/* 描述 */}
          <p className={`mb-8 text-lg ${secondaryTextColor}`}>{tool.description}</p>

          {/* 功能列表 */}
          <div className="mb-8">
            <h2 className={`mb-4 text-2xl font-semibold ${textColor}`}>{t.aiDetail.features}</h2>
            <ul className="space-y-2">
              {tool.features.map((feature) => (
                <li key={feature} className={`flex items-center gap-2 ${secondaryTextColor}`}>
                  <span className="text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* 访问网站按钮 */}
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-block rounded-lg px-6 py-2 ${
              theme === 'dark'
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            {t.aiDetail.website}
          </a>
        </div>
      </div>
    </div>
  );
}
