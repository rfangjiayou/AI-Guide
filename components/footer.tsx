"use client";

import { useLanguage } from "./language-provider";
import { Github } from "lucide-react";

const translations = {
  zh: {
    description: "发现和探索最好的 AI 工具",
    copyright: "版权所有",
  },
  en: {
    description: "Discover and explore the best AI tools",
    copyright: "Copyright",
  },
};

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">AI Navigator</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.description}
            </p>
          </div>
          <div className="md:text-center lg:text-left">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            {t.copyright} © {year} AI Navigator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
