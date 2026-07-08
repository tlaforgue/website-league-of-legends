# Jungle Academy

Site personnel pour progresser en jungle sur League of Legends. Construit avec [Astro](https://astro.build), alimenté par des notes en Markdown.

🔗 **Site en ligne** : https://<ton-pseudo>.github.io/website-league-of-legends

## Stack

- [Astro](https://astro.build) — framework, Content Collections
- CSS natif avec variables (pas de framework CSS)
- Déploiement automatique via GitHub Actions → GitHub Pages

## Structure du projet

\`\`\`
src/
├── content/
│   ├── jungle-guides/   # fichiers .md des guides généraux
│   └── champions/       # fichiers .md des guides par champion
├── content.config.ts    # schéma des collections (Zod)
├── layouts/
│   └── Layout.astro     # squelette commun (head, navbar)
├── components/
│   └── Navbar.astro
├── pages/
│   ├── index.astro
│   ├── guides/
│   │   ├── index.astro    # liste des guides
│   │   └── [id].astro     # page de détail (générée par guide)
│   └── champions/
│       ├── index.astro
│       └── [id].astro
├── styles/
│   ├── tokens.css        # couleurs, polices, espacements
│   └── global.css        # reset, styles de base, .prose
└── utils/
    └── urls.ts            # gestion du "base" dans les liens internes
\`\`\`

## Ajouter un guide

Créer un fichier dans \`src/content/jungle-guides/\`, par exemple \`mon-guide.md\` :

\`\`\`markdown
---
title: "Titre du guide"
description: "Description courte, affichée dans la liste."
order: 2
updatedDate: 2026-07-08
---

Contenu du guide en Markdown.
\`\`\`

## Ajouter un champion

Créer un fichier dans \`src/content/champions/\`, par exemple \`kayn.md\` :

\`\`\`markdown
---
name: "Kayn"
title: "le Fléau écarlate"
difficulty: "difficile"       # facile | moyen | difficile
damageType: "mixte"           # physique | magique | mixte
tags: ["assassin", "duelliste"]
updatedDate: 2026-07-08
---

Contenu du guide en Markdown.
\`\`\`

Dans les deux cas : aucune modification de code nécessaire, la page apparaît automatiquement après le prochain build.

## Développement local

\`\`\`bash
npm install
npm run dev       # serveur de dev sur http://localhost:4321/website-league-of-legends
npm run build     # build de production
npm run preview   # prévisualiser le build localement
\`\`\`