import { Theme } from '../types/types';
import { defaultTheme, themes } from '../data/themes';

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty('--color-primary', theme.primary);
  root.style.setProperty('--color-secondary', theme.secondary);
  root.style.setProperty('--color-accent', theme.accent);
  root.style.setProperty('--color-text', theme.text);
  root.style.setProperty('--color-background', theme.background);
}

export function getRandomTheme(): Theme {
  const randomIndex = Math.floor(Math.random() * themes.length);
  return themes[randomIndex];
}

export function resetTheme() {
  applyTheme(defaultTheme);
}