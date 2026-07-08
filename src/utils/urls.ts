// src/utils/urls.ts

/**
 * Construit une URL interne en tenant compte du "base" du site.
 * Gère 2 pièges classiques d'Astro :
 * - le double slash (ex: /base//guides)
 * - le slash final sur la racine (ex: /base/ au lieu de /base),
 *   qui casse le mode trailingSlash: 'never'
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // retire le "/" final du base

  // Cas particulier : la page d'accueil ne doit pas ajouter de "/" après le base
  if (path === '/') {
    return base === '' ? '/' : base;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}