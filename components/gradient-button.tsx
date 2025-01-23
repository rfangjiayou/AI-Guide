'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

export function GradientButton({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  // 定义不同主题下的渐变颜色
  const lightGradient = 'from-blue-500 to-purple-600';
  const darkGradient = 'from-purple-700 to-blue-800';
  const gradient = theme === 'dark' ? darkGradient : lightGradient;

  return (
    <Link
      href="/ai"
      className={`inline-block bg-gradient-to-r px-8 py-3 text-lg font-semibold text-white ${gradient} rounded-lg transition-all hover:scale-105 hover:shadow-lg`}
    >
      {children}
    </Link>
  );
}
