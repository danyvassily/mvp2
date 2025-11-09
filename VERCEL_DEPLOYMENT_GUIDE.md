# Guide de Déploiement Vercel

## 📋 Vue d'ensemble

Ce guide vous accompagne dans le déploiement de l'application Château Lastours sur Vercel. L'application utilise Next.js 15 avec App Router et bénéficie de l'optimisation automatique des images et de l'ISR (Incremental Static Regeneration) de Vercel.

## 🚀 Prérequis

- Compte Vercel (gratuit ou payant)
- Accès au dépôt Git (GitHub, GitLab, ou Bitbucket)
- Node.js 18+ installé localement (pour les tests)
- pnpm 8+ installé

## 📦 Configuration Actuelle

### Fichiers de Configuration

- **`vercel.json`** : Configuration Vercel avec headers de sécurité, redirections et cache
- **`next.config.mjs`** : Configuration Next.js optimisée pour Vercel (sans export statique)
- **`.vercelignore`** : Fichiers exclus du déploiement

### Caractéristiques

✅ **ISR (Incremental Static Regeneration)** : Les pages avec `generateStaticParams()` sont générées statiquement et régénérées à la demande  
✅ **Optimisation automatique des images** : Vercel optimise automatiquement toutes les images Next.js  
✅ **Headers de sécurité** : Configuration complète des en-têtes HTTP de sécurité  
✅ **Cache optimisé** : Cache long terme pour les assets statiques  
✅ **Redirections SEO** : Toutes les redirections importantes configurées  

## 🔧 Déploiement

### Option 1 : Déploiement via l'Interface Vercel (Recommandé)

1. **Connecter le dépôt Git**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Add New Project"
   - Importez votre dépôt Git
   - Vercel détectera automatiquement Next.js

2. **Configuration du projet**
   - **Framework Preset** : Next.js (détecté automatiquement)
   - **Root Directory** : `chateaulastour` (si le projet est dans un sous-dossier)
   - **Build Command** : `pnpm build` (déjà configuré dans `vercel.json`)
   - **Output Directory** : `.next` (géré automatiquement par Vercel)
   - **Install Command** : `pnpm install --frozen-lockfile` (déjà configuré)

3. **Variables d'environnement** (si nécessaire)
   - Ajoutez `NEXT_PUBLIC_SITE_URL` avec votre domaine de production
   - Exemple : `https://chateau-lastours.vercel.app` ou votre domaine personnalisé

4. **Déployer**
   - Cliquez sur "Deploy"
   - Vercel construira et déploiera automatiquement votre application

### Option 2 : Déploiement via CLI Vercel

1. **Installer Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Se connecter**
   ```bash
   vercel login
   ```

3. **Déployer**
   ```bash
   cd chateaulastour
   vercel
   ```

4. **Déploiement en production**
   ```bash
   vercel --prod
   ```

## 🌐 Configuration du Domaine Personnalisé

1. **Dans le dashboard Vercel**
   - Allez dans "Settings" > "Domains"
   - Ajoutez votre domaine personnalisé
   - Suivez les instructions pour configurer les DNS

2. **Mettre à jour les variables d'environnement**
   - Ajoutez `NEXT_PUBLIC_SITE_URL` avec votre domaine personnalisé
   - Redéployez l'application

3. **Mettre à jour les métadonnées** (si nécessaire)
   - Le fichier `app/layout.tsx` utilise déjà `NEXT_PUBLIC_SITE_URL` ou `VERCEL_URL` automatiquement

## 🔍 Vérification du Déploiement

### Tests Locaux Avant Déploiement

```bash
# Installation des dépendances
pnpm install --frozen-lockfile

# Build local
pnpm build

# Test en production locale
pnpm start
```

### Checklist Post-Déploiement

- [ ] ✅ L'application se charge correctement
- [ ] ✅ Les images sont optimisées (vérifier dans les DevTools Network)
- [ ] ✅ Les redirections fonctionnent (`/home` → `/`, etc.)
- [ ] ✅ Les pages dynamiques se chargent (`/les-vins/[slug]`, `/actualites/[slug]`, etc.)
- [ ] ✅ Les headers de sécurité sont présents (vérifier dans les DevTools Network)
- [ ] ✅ Le cache fonctionne pour les assets statiques
- [ ] ✅ Le sitemap est accessible (`/sitemap.xml`)

## 📊 Optimisations Vercel

### ISR (Incremental Static Regeneration)

Les pages avec `generateStaticParams()` sont générées statiquement au build et peuvent être régénérées à la demande :

- **Pages de vins** : `/les-vins/[slug]`
- **Pages d'actualités** : `/actualites/[slug]`
- **Pages d'événements** : `/evenements/[slug]`

### Optimisation des Images

Vercel optimise automatiquement toutes les images Next.js :
- Conversion automatique en WebP/AVIF
- Redimensionnement selon les breakpoints
- Lazy loading automatique
- CDN global pour une distribution rapide

### Cache

- **Assets statiques** : Cache de 1 an (`max-age=31536000`)
- **Images optimisées** : Cache de 1 an
- **Pages statiques** : Régénération à la demande (ISR)

## 🔒 Sécurité

Les headers suivants sont configurés dans `vercel.json` :

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## 🐛 Dépannage

### Erreur de Build

1. **Vérifier les logs de build dans Vercel**
2. **Tester localement** : `pnpm build`
3. **Vérifier les dépendances** : `pnpm install --frozen-lockfile`

### Images Non Optimisées

- Vérifier que `images.unoptimized` n'est pas défini à `true` dans `next.config.mjs`
- Vérifier que les images utilisent le composant `next/image`

### Redirections Non Fonctionnelles

- Vérifier la syntaxe dans `vercel.json`
- Tester avec `vercel dev` localement

### Variables d'Environnement

- Vérifier que toutes les variables nécessaires sont définies dans Vercel
- Redéployer après modification des variables

## 📝 Commandes Utiles

```bash
# Déploiement en preview
vercel

# Déploiement en production
vercel --prod

# Voir les logs
vercel logs

# Ouvrir le dashboard
vercel dashboard

# Tester localement avec Vercel
vercel dev
```

## 🔄 Migration depuis Netlify

Si vous migrez depuis Netlify :

1. **Retirer l'export statique** : ✅ Déjà fait dans `next.config.mjs`
2. **Activer l'optimisation des images** : ✅ Déjà fait
3. **Migrer les redirections** : ✅ Déjà fait dans `vercel.json`
4. **Migrer les headers** : ✅ Déjà fait dans `vercel.json`
5. **Mettre à jour les métadonnées** : ✅ Déjà fait dans `layout.tsx`

## 📚 Ressources

- [Documentation Vercel Next.js](https://vercel.com/docs/frameworks/nextjs)
- [Guide ISR Vercel](https://vercel.com/docs/incremental-static-regeneration)
- [Optimisation des Images Vercel](https://vercel.com/docs/image-optimization)
- [Configuration Vercel.json](https://vercel.com/docs/project-configuration)

## ✅ Avantages du Déploiement Vercel

- 🚀 **Performance** : CDN global, optimisation automatique
- 🔄 **ISR** : Régénération incrémentale des pages statiques
- 🖼️ **Images** : Optimisation automatique avec Next.js Image
- 🔒 **Sécurité** : Headers de sécurité configurés
- 📊 **Analytics** : Intégration avec Vercel Analytics (déjà installé)
- 🌍 **Edge Network** : Distribution mondiale pour une latence minimale

---

**Note** : Ce guide est optimisé pour Next.js 15 avec App Router. Pour toute question ou problème, consultez la documentation Vercel ou les logs de déploiement.

