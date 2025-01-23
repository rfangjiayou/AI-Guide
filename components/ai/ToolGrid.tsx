import { ToolCard } from './ToolCard';
import type { Tool } from '@/lib/data/tools';

export function ToolGrid({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
