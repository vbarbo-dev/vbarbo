import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export type Card = {
  icon?: AstroComponentFactory;
  title: string;
  desc: string;
  impact: string;
  impactDesc: string;
  tags: string[];
};

export type Category = {
  icon?: AstroComponentFactory;
  color: string;
  title: string;
  items: string[];
};

export type Job = {
  company: string;
  role: string;
  start: string;
  end: string;
  tags: string[];
  bullets: string[];
}