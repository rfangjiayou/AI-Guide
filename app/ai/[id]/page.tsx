import { notFound } from 'next/navigation';
import { getToolById, getTools } from '@/lib/data/tools';
import ToolDetail from './ToolDetail';

export function generateStaticParams() {
  const tools = getTools();
  return tools.map((tool) => ({
    id: tool.id,
  }));
}

export default function ToolDetailPage({ params: { id } }: { params: { id: string } }) {
  const tool = getToolById(id);

  if (!tool) {
    notFound();
  }

  return <ToolDetail tool={tool} />;
}
