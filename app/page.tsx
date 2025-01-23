'use client';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getDictionary } from '@/i18n';

export default function Home() {
  const { language } = useLanguage();
  const t = getDictionary(language);

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
          <h2 className="mb-12 text-center text-3xl font-bold">{t.features.title}</h2>
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
  );
}
