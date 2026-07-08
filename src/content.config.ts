// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Collection des guides généraux / principes de la jungle
const jungleGuides = defineCollection({
  // Le loader glob() va chercher tous les .md dans ce dossier
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/jungle-guides',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // "order" permet de contrôler l'ordre d'affichage dans la liste
    // sans dépendre de l'ordre alphabétique des fichiers
    order: z.number().default(0),
    updatedDate: z.coerce.date().optional(),
  }),
});

// Collection des guides par champion
const champions = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/champions',
  }),
  schema: z.object({
    name: z.string(),           // ex: "Kayn"
    title: z.string().optional(), // ex: "le Fléau écarlate"
    difficulty: z.enum(['facile', 'moyen', 'difficile']).optional(),
    damageType: z.enum(['physique', 'magique', 'mixte']).optional(),
    image: z.string().optional(), // chemin vers une icône, ex: "/champions/kayn.png"
    tags: z.array(z.string()).default([]), // ex: ["assassin", "duelliste"]
    updatedDate: z.coerce.date().optional(),
  }),
});

// Astro exige un unique export nommé "collections"
export const collections = {
  'jungle-guides': jungleGuides,
  champions,
};