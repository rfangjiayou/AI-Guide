import Link from 'next/link';
import { useTheme } from 'next-themes';

type Tool = {
  id: string;
  name: string;
  icon: string;
  description: string;
  rating: number;
};

export function ToolCard({ tool }: { tool: Tool }) {
  const { theme } = useTheme();

  // 定义不同主题下的卡片样式
  const cardStyle =
    theme === 'dark'
      ? 'bg-gray-800 hover:bg-gray-700 text-gray-100'
      : 'bg-white hover:bg-gray-50 text-gray-900';

  return (
    <Link
      href={`/ai/${tool.id}`}
      className={`group transform rounded-lg p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg ${cardStyle}`}
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="text-3xl">{tool.icon}</div>
        <div>
          <h2 className="text-xl font-semibold">{tool.name}</h2>
          <div className="flex items-center gap-1 text-yellow-400">
            {'★'.repeat(tool.rating).padEnd(5, '☆')}
          </div>
        </div>
      </div>
      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{tool.description}</p>
    </Link>
  );
}
