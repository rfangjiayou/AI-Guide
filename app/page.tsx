"use client"

import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bot, Brain, Sparkles, Zap } from 'lucide-react'

const translations = {
  zh: {
    hero: {
      title: '探索 AI 工具的未来',
      subtitle: '发现、比较和使用最前沿的人工智能工具',
      cta: '开始探索',
    },
    features: {
      title: '为什么选择我们',
      cards: [
        {
          title: '精选工具',
          description: '严格筛选的高质量 AI 工具集合',
          icon: Bot,
        },
        {
          title: '实时更新',
          description: '及时追踪最新的 AI 工具和趋势',
          icon: Zap,
        },
        {
          title: '深度分析',
          description: '专业的 AI 工具评测和使用建议',
          icon: Brain,
        },
        {
          title: '个性推荐',
          description: '基于您的需求推荐最适合的工具',
          icon: Sparkles,
        },
      ],
    },
  },
  en: {
    hero: {
      title: 'Explore the Future of AI Tools',
      subtitle: 'Discover, compare, and use cutting-edge artificial intelligence tools',
      cta: 'Start Exploring',
    },
    features: {
      title: 'Why Choose Us',
      cards: [
        {
          title: 'Curated Tools',
          description: 'Carefully selected collection of high-quality AI tools',
          icon: Bot,
        },
        {
          title: 'Real-time Updates',
          description: 'Stay up-to-date with the latest AI tools and trends',
          icon: Zap,
        },
        {
          title: 'Deep Analysis',
          description: 'Professional AI tool reviews and usage recommendations',
          icon: Brain,
        },
        {
          title: 'Personal Recommendations',
          description: 'Tool recommendations based on your needs',
          icon: Sparkles,
        },
      ],
    },
  },
}

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="flex flex-col items-center">
      <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-8 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {t.hero.subtitle}
        </p>
        <Button size="lg" className="h-12 px-8">
          {t.hero.cta}
        </Button>
      </section>

      <section className="w-full bg-muted/50 py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            {t.features.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.features.cards.map((card, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <card.icon className="h-8 w-8" />
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{card.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}