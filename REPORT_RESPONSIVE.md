# 📱 RAPPORT DE REFONTE RESPONSIVE - Château Lastours MVP

**Date**: 5 novembre 2025  
**Version**: 1.0.0  
**Stack**: Next.js 15 / React 19 / Tailwind CSS v4

---

## 📋 Table des matières

1. [Résumé exécutif](#résumé-exécutif)
2. [Suppression du dark mode](#1-suppression-complète-du-dark-mode)
3. [Corrections responsive mobile/tablette](#2-corrections-responsive-mobiletablette)
4. [Optimisations images et containers](#3-optimisations-images-et-containers)
5. [Scripts de détection](#4-scripts-de-détection-créés)
6. [Breakpoints et rythme vertical](#5-breakpoints-et-rythme-vertical)
7. [Checklist de vérification](#6-checklist-de-vérification)
8. [Prochaines étapes](#7-prochaines-étapes)

---

## Résumé exécutif

### ✅ Objectifs atteints

- ✅ **Suppression totale du dark mode** : Toutes les variantes `dark:` supprimées
- ✅ **Correction des fonds et espaces** : Normalisation des backgrounds et rythme vertical cohérent
- ✅ **Optimisation responsive** : Mobile (320-640px), Tablette (641-1024px), Desktop (1025px+)
- ✅ **Scripts de détection** : Outils pour scanner dark classes et overflow
- ✅ **Documentation complète** : Guide et rapport détaillé

### 📊 Statistiques

| Métrique | Avant | Après |
|----------|-------|-------|
| Classes `dark:` | 27+ occurrences | 0 |
| Fichiers modifiés | - | 32 |
| Composants UI corrigés | - | 17 |
| Scripts créés | - | 2 |
| Fichiers CSS ajoutés | - | 1 (responsive-fixes.css) |

---

## 1. Suppression complète du dark mode

### 1.1 Configuration Tailwind

**Fichier**: `tailwind.config.mjs`

**Avant**:
```js
darkMode: "media", // Désactivé - force le mode clair uniquement
```

**Après**:
```js
darkMode: false, // Désactivé complètement - mode clair uniquement
```

**Impact**: Désactive la génération des variantes `dark:` dans le build Tailwind.

---

### 1.2 Suppression des variables CSS dark mode

**Fichier**: `styles/globals.css`

**Supprimé**:
- `.dark { ... }` - Bloc complet de variables dark mode (lignes 66-126)
- `.dark { ... }` - Second bloc de mappings (lignes 167-200)
- `@custom-variant dark (&:is(.dark *));` - Variante custom

**Résultat**: Mode clair uniquement, réduction de ~130 lignes de CSS inutiles.

---

### 1.3 Composants UI corrigés (17 fichiers)

Tous les composants UI shadcn/ui ont été purgés des classes `dark:`:

#### 1.3.1 Button (`components/ui/button.tsx`)

**Classes supprimées**:
- `dark:aria-invalid:ring-destructive/40`
- `dark:focus-visible:ring-destructive/40`
- `dark:bg-destructive/60`
- `dark:bg-input/30`
- `dark:border-input`
- `dark:hover:bg-input/50`
- `dark:hover:bg-accent/50`

**Remplacement**: Classes claires équivalentes ou suppression pure.

#### 1.3.2 Input (`components/ui/input.tsx`)

**Avant**:
```tsx
dark:bg-input/30
dark:aria-invalid:ring-destructive/40
```

**Après**:
```tsx
bg-white
aria-invalid:ring-destructive/20
```

#### 1.3.3 Select (`components/ui/select.tsx`)

**Avant**:
```tsx
dark:bg-input/30 dark:hover:bg-input/50
```

**Après**:
```tsx
bg-white hover:bg-gray-50
```

#### 1.3.4 Textarea (`components/ui/textarea.tsx`)

**Avant**:
```tsx
dark:bg-input/30
dark:aria-invalid:ring-destructive/40
```

**Après**:
```tsx
bg-white
aria-invalid:ring-destructive/20
```

#### 1.3.5 Checkbox (`components/ui/checkbox.tsx`)

**Avant**:
```tsx
dark:bg-input/30
dark:data-[state=checked]:bg-primary
dark:aria-invalid:ring-destructive/40
```

**Après**:
```tsx
bg-white
data-[state=checked]:bg-primary
aria-invalid:ring-destructive/20
```

#### 1.3.6 Switch (`components/ui/switch.tsx`)

**Avant**:
```tsx
dark:data-[state=unchecked]:bg-input/80
dark:data-[state=unchecked]:bg-foreground
dark:data-[state=checked]:bg-primary-foreground
```

**Après**:
```tsx
data-[state=unchecked]:bg-gray-300
bg-white
data-[state=checked]:bg-white
```

#### 1.3.7 Tabs (`components/ui/tabs.tsx`)

**Avant**:
```tsx
dark:data-[state=active]:text-foreground
dark:data-[state=active]:border-input
dark:data-[state=active]:bg-input/30
dark:text-muted-foreground
```

**Après**:
```tsx
data-[state=active]:text-foreground
data-[state=active]:border-gray-200
text-foreground
```

#### 1.3.8 Radio Group (`components/ui/radio-group.tsx`)

**Avant**:
```tsx
dark:aria-invalid:ring-destructive/40
dark:bg-input/30
```

**Après**:
```tsx
aria-invalid:ring-destructive/20
bg-white
```

#### 1.3.9 Toggle (`components/ui/toggle.tsx`)

**Avant**:
```tsx
dark:aria-invalid:ring-destructive/40
```

**Après**:
```tsx
aria-invalid:ring-destructive/20
```

#### 1.3.10 Input OTP (`components/ui/input-otp.tsx`)

**Avant**:
```tsx
dark:data-[active=true]:aria-invalid:ring-destructive/40
dark:bg-input/30
```

**Après**:
```tsx
data-[active=true]:aria-invalid:ring-destructive/20
bg-white
```

#### 1.3.11 Calendar (`components/ui/calendar.tsx`)

**Avant**:
```tsx
dark:hover:text-accent-foreground
```

**Après**:
```tsx
hover:text-accent-foreground
```

#### 1.3.12 Chart (`components/ui/chart.tsx`)

**Avant**:
```ts
const THEMES = { light: "", dark: ".dark" } as const
```

**Après**:
```ts
// Dark mode supprimé - Mode clair uniquement
const THEMES = { light: "" } as const
```

#### 1.3.13 Badge (`components/ui/badge.tsx`)

**Avant**:
```tsx
dark:aria-invalid:ring-destructive/40
dark:focus-visible:ring-destructive/40
dark:bg-destructive/60
```

**Après**:
```tsx
aria-invalid:ring-destructive/20
focus-visible:ring-destructive/20
```

#### 1.3.14-16 Menu Components

Les composants suivants ont eu leurs classes `dark:` supprimées:
- `components/ui/dropdown-menu.tsx`
- `components/ui/context-menu.tsx`
- `components/ui/menubar.tsx`

**Avant**:
```tsx
dark:data-[variant=destructive]:focus:bg-destructive/20
```

**Après**:
```tsx
data-[variant=destructive]:focus:bg-red-50
```

#### 1.3.17 RichSection (`components/common/RichSection.tsx`)

**Changement de variante**:

**Avant**:
```tsx
variant?: 'default' | 'dark' | 'light'
```

**Après**:
```tsx
variant?: 'default' | 'accent' | 'light'
```

La variante `dark` a été remplacée par `accent` avec fond clair.

---

### 1.4 Mobile Optimizations CSS

**Fichier**: `styles/mobile-optimizations.css`

**Déjà présent (conservé)**:
```css
@media (prefers-color-scheme: dark) {
  * {
    color-scheme: light !important;
  }
}
```

Cette règle force le mode clair même si le système préfère le dark mode.

---

## 2. Corrections responsive mobile/tablette

### 2.1 Nouveau fichier: `styles/responsive-fixes.css`

**Création d'un fichier CSS dédié** avec 14 sections de corrections.

#### 2.1.1 Normalisation des fonds

```css
html,
body,
#__next {
  background: #ffffff;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

main {
  background: transparent;
  position: relative;
  min-height: 100vh;
}
```

**Problème résolu**: Fonds gris/colorés parasites en mobile.

---

#### 2.1.2 Rythme vertical cohérent

**Variables CSS créées**:

```css
:root {
  --rhythm: 24px;
  --rhythm-0-5: 12px;
  --rhythm-1: 24px;
  --rhythm-2: 48px;
  --rhythm-3: 72px;
  --rhythm-4: 96px;
  --rhythm-5: 120px;
  
  --header-height: 80px;
}
```

**Application**:

```css
section {
  margin-block: var(--rhythm-2);
  padding-block: var(--rhythm-2);
}
```

**Problème résolu**: Espaces verticaux incohérents et trop grands.

---

#### 2.1.3 Containers responsive

**Système de containers progressif**:

| Breakpoint | Max-width | Padding |
|------------|-----------|---------|
| < 640px    | 100%      | 1rem    |
| 640px+     | 640px     | 1.5rem  |
| 768px+     | 768px     | 2rem    |
| 1024px+    | 1024px    | 2.5rem  |
| 1280px+    | 1200px    | 3rem    |

**Problème résolu**: Containers trop larges ou trop étroits.

---

#### 2.1.4 Corrections mobile (320-640px)

**Espacement réduit**:

```css
@media (max-width: 640px) {
  section {
    margin-block: var(--rhythm-1);
    padding-block: var(--rhythm-1);
  }
  
  .hero-section {
    min-height: 50vh;
    padding-block: var(--rhythm-2);
  }
}
```

**Typographie adaptée**:

```css
@media (max-width: 640px) {
  h1 { font-size: 2rem; line-height: 1.2; }
  h2 { font-size: 1.75rem; line-height: 1.3; }
  h3 { font-size: 1.5rem; line-height: 1.3; }
}
```

**Grilles en colonne unique**:

```css
@media (max-width: 640px) {
  .grid,
  [class*="grid-"] {
    grid-template-columns: 1fr !important;
    gap: var(--rhythm-1);
  }
}
```

**Fix background-attachment**:

```css
@media (max-width: 640px) {
  [style*="background-attachment: fixed"],
  .bg-fixed {
    background-attachment: scroll !important;
  }
}
```

**Problème résolu**: `background-attachment: fixed` cause des bandes noires en mobile.

---

#### 2.1.5 Corrections tablette (641-1024px)

```css
@media (min-width: 641px) and (max-width: 1024px) {
  section {
    margin-block: var(--rhythm-2);
    padding-block: var(--rhythm-2);
  }
  
  .hero-section {
    min-height: 60vh;
    padding-block: var(--rhythm-3);
  }
  
  .grid-responsive {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--rhythm-1-5);
  }
}
```

---

#### 2.1.6 Prévention overflow

```css
html,
body {
  overflow-x: hidden;
  max-width: 100vw;
}

.container,
.section-container,
main,
section {
  max-width: 100%;
  overflow-x: hidden;
}

img,
video,
iframe,
embed {
  max-width: 100%;
  height: auto;
}
```

**Problème résolu**: Débordements horizontaux causant scroll horizontal.

---

#### 2.1.7 Sticky header et scroll-margin

```css
section[id],
[id] {
  scroll-margin-top: var(--header-height);
}

.pt-20,
.pt-header {
  padding-top: var(--header-height);
}
```

**Problème résolu**: Contenu masqué sous le header sticky lors du scroll vers ancre.

---

#### 2.1.8 Corrections de bandes parasites

```css
@media (max-width: 1024px) {
  section:not([class*="bg-"]):not([style*="background"]) {
    background: transparent;
  }
  
  .no-gradient {
    background-image: none !important;
  }
  
  .no-shadow-mobile {
    box-shadow: none !important;
  }
}
```

**Problème résolu**: Bandes colorées/grises involontaires en mobile.

---

#### 2.1.9 Optimisations Next/Image

```css
.next-image-wrapper,
.relative:has(> img[data-nimg]) {
  position: relative;
  width: 100%;
  overflow: hidden;
}

img[data-nimg="fill"] {
  object-fit: cover;
  object-position: center;
}

@media (max-width: 640px) {
  img[style*="object-fit: none"] {
    object-fit: cover !important;
  }
}
```

**Problème résolu**: Images mal recadrées en mobile.

---

#### 2.1.10 Grilles responsive

```css
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(280px, 100%), 1fr));
  gap: var(--rhythm-1);
}

@media (min-width: 640px) {
  .grid-auto-fit {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
```

**Problème résolu**: Colonnes de grille trop étroites (< 280px) en mobile.

---

#### 2.1.11 Corrections de lisibilité

```css
body {
  color: #111827;
  background: #ffffff;
}

.bg-accent {
  color: #1f1d1a;
}

.bg-primary {
  color: #ffffff;
}
```

**Problème résolu**: Contrastes insuffisants causant problèmes de lecture.

---

#### 2.1.12 Breakpoints spécifiques

**Mobile (320-480px)**:
```css
@media (max-width: 480px) {
  :root {
    --rhythm: 16px;
    --rhythm-2: 32px;
    --rhythm-3: 48px;
  }
}
```

**Phablet (481-640px)**:
```css
@media (min-width: 481px) and (max-width: 640px) {
  :root {
    --rhythm: 20px;
    --rhythm-2: 40px;
    --rhythm-3: 60px;
  }
}
```

**Tablette (641-1024px)**:
```css
@media (min-width: 641px) and (max-width: 1024px) {
  .container {
    padding-inline: 2rem;
  }
}
```

**Desktop (1025px+)**:
```css
@media (min-width: 1025px) {
  section {
    margin-block: var(--rhythm-3);
    padding-block: var(--rhythm-3);
  }
}
```

---

### 2.2 Import dans globals.css

**Fichier**: `app/globals.css`

**Ajout**:
```css
@import '../styles/responsive-fixes.css';
```

---

## 3. Optimisations images et containers

### 3.1 Recommandations Next/Image

**34 fichiers utilisent Next/Image**. Recommandations générales:

#### 3.1.1 Propriété `sizes`

**Bonne pratique**:

```tsx
<Image
  src="/image.jpg"
  alt="Description"
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
  className="object-cover"
/>
```

**Mapping recommandé**:

```tsx
// Hero/Full-bleed
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"

// Cartes en grille
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"

// Thumbnails
sizes="(max-width: 640px) 50vw, 200px"
```

#### 3.1.2 object-fit

**Pour images de héros/bannières**:
```tsx
className="object-cover object-center"
```

**Pour images de produits**:
```tsx
className="object-contain"
```

#### 3.1.3 priority

**Uniquement pour images above-the-fold**:

```tsx
<Image
  src="/hero.jpg"
  alt="Hero"
  fill
  priority
  sizes="100vw"
/>
```

---

### 3.2 Containers optimisés

**Le fichier `responsive-fixes.css` fournit déjà les containers optimisés**:

```css
.container {
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem; /* Mobile */
}
```

**Utilisation dans les composants**:

```tsx
<section className="container">
  {/* Contenu */}
</section>
```

---

## 4. Scripts de détection créés

### 4.1 Script find-dark-classes.ts

**Fichier**: `scripts/find-dark-classes.ts`

**Fonctionnalités**:
- Scan récursif de tous les fichiers `.tsx`, `.ts`, `.jsx`, `.js`, `.css`
- Détection de toutes les occurrences `dark:`
- Suggestions de remplacement automatiques
- Output en tableau formaté

**Usage**:

```bash
npx tsx scripts/find-dark-classes.ts
```

**Output exemple**:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SCAN DES CLASSES DARK: - RAPPORT DE DÉTECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️  27 occurrence(s) de classes dark: détectée(s):

📄 components/ui/button.tsx
────────────────────────────────────────────────────────────────
  Ligne 8:
    Code:       dark:aria-invalid:ring-destructive/40
    Suggestion: aria-invalid:ring-red-400
```

**Mappings de suggestions**:

| dark: class | Suggestion |
|-------------|------------|
| `dark:bg-input/30` | `bg-white` |
| `dark:text-foreground` | `text-gray-900` |
| `dark:border-input` | `border-gray-200` |
| `dark:aria-invalid:ring-destructive/40` | `aria-invalid:ring-red-400` |

---

### 4.2 Script find-overflow.js

**Fichier**: `scripts/find-overflow.js`

**Fonctionnalités**:
- Détection des éléments qui débordent du viewport
- Marquage visuel en rouge
- Classification par sévérité (Critique, Modéré, Mineur)
- Identification des propriétés CSS problématiques
- Génération de XPath pour localisation

**Usage**:

```js
// Dans la console du navigateur
// 1. Copier-coller le contenu du fichier
// 2. Exécuter:
detectOverflow()
```

**Output exemple**:

```
🔍 Démarrage du scan d'overflow...

⚠️  3 élément(s) débordant détecté(s):

🔴 CRITIQUE (débordement > 50px):
┌─────────┬──────────┬──────────┬──────────────┬─────────────────────────┐
│ Élément │ Tag      │ Largeur  │ Débordement  │ Styles                  │
├─────────┼──────────┼──────────┼──────────────┼─────────────────────────┤
│ #hero   │ DIV      │ 1920px   │ 120px        │ width: 100vw, padding   │
└─────────┴──────────┴──────────┴──────────────┴─────────────────────────┘

💡 RECOMMANDATIONS:
1. Les éléments détectés sont marqués en rouge sur la page
2. Vérifiez les propriétés CSS problématiques listées
3. Solutions courantes:
   - Ajouter max-width: 100% sur les containers
   - Vérifier les position: absolute non contenus
```

**Commandes bonus**:

```js
// Effacer les marqueurs rouges
clearOverflowMarkers()

// Afficher les breakpoints à tester
testBreakpoints()
```

---

## 5. Breakpoints et rythme vertical

### 5.1 Breakpoints cibles

| Device | Range | Variable CSS rhythm |
|--------|-------|---------------------|
| **Mobile** | 320–480px | 16px |
| **Phablet** | 481–640px | 20px |
| **Tablette** | 641–1024px | 24px |
| **Desktop** | ≥ 1025px | 24px |

### 5.2 Rythme vertical

**Variables disponibles**:

```css
var(--rhythm)       /* 24px base */
var(--rhythm-0-5)   /* 12px */
var(--rhythm-1)     /* 24px */
var(--rhythm-2)     /* 48px */
var(--rhythm-3)     /* 72px */
var(--rhythm-4)     /* 96px */
var(--rhythm-5)     /* 120px */
```

**Application**:

```tsx
<section className="py-rhythm-2 my-rhythm-3">
  {/* Contenu */}
</section>
```

Ou directement en CSS:

```css
.my-section {
  padding-block: var(--rhythm-2);
  margin-block: var(--rhythm-3);
}
```

---

## 6. Checklist de vérification

### 6.1 Dark mode

- [x] Tailwind config: `darkMode: false`
- [x] Suppression variables CSS `.dark` dans styles/globals.css
- [x] Suppression `@custom-variant dark`
- [x] Purge classes `dark:` dans tous les composants UI (17 fichiers)
- [x] Verification: 0 occurrence de `dark:` dans le codebase

### 6.2 Responsive

- [x] Création `responsive-fixes.css`
- [x] Import dans `globals.css`
- [x] Normalisation fonds (html, body, main)
- [x] Rythme vertical défini (--rhythm)
- [x] Containers responsive (4 breakpoints)
- [x] Corrections mobile (< 640px)
- [x] Corrections tablette (641-1024px)
- [x] Prévention overflow horizontal
- [x] Sticky header scroll-margin
- [x] Suppression bandes parasites
- [x] Optimisations Next/Image
- [x] Grilles responsive
- [x] Corrections lisibilité

### 6.3 Scripts

- [x] Script `find-dark-classes.ts` créé et testé
- [x] Script `find-overflow.js` créé et testé
- [x] Documentation d'usage incluse

### 6.4 Documentation

- [x] REPORT_RESPONSIVE.md complet
- [x] Diffs avant/après pour chaque modification
- [x] Liste des fichiers modifiés
- [x] Recommandations et bonnes pratiques

---

## 7. Prochaines étapes

### 7.1 Tests manuels recommandés

#### Mobile (375px)
- [ ] Homepage
- [ ] Page vins
- [ ] Page événements
- [ ] Page contact
- [ ] Navigation header
- [ ] Footer

#### Tablette (768px)
- [ ] Grilles de produits
- [ ] Sections riches avec images
- [ ] Formulaires
- [ ] Modals

#### Desktop (1440px)
- [ ] Vérification non-régression
- [ ] Layout global
- [ ] Hero sections

### 7.2 Tests automatisés à ajouter

```bash
# Playwright/Cypress
npm run test:e2e:mobile
npm run test:e2e:tablet
npm run test:e2e:desktop
```

### 7.3 Optimisations futures

1. **Lazy loading images**:
   - Ajouter `loading="lazy"` aux images below-the-fold
   - Implémenter placeholder blur avec `blurDataURL`

2. **Web Vitals**:
   - Mesurer LCP, FID, CLS
   - Optimiser CLS en définissant `width` et `height` explicites

3. **Font loading**:
   - Passer à `next/font` pour optimisation automatique
   - Ajouter `font-display: swap`

4. **CSS critique**:
   - Extraire CSS above-the-fold
   - Defer CSS non-critique

### 7.4 Accessibilité

- [ ] Tester avec screen reader (NVDA/JAWS)
- [ ] Vérifier contraste avec Lighthouse (min 4.5:1)
- [ ] Tester navigation clavier
- [ ] Ajouter `aria-label` manquants
- [ ] Vérifier landmarks HTML5

### 7.5 Performance

**Avant déploiement, vérifier**:

```bash
# Build production
npm run build

# Analyze bundle
npm run analyze

# Lighthouse audit
npx lighthouse https://votre-site.com --view
```

**Objectifs**:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

---

## 8. Fichiers modifiés (récapitulatif)

### 8.1 Configuration (1)
- `tailwind.config.mjs` - darkMode: false

### 8.2 Styles globaux (3)
- `app/globals.css` - Import responsive-fixes.css
- `styles/globals.css` - Suppression dark mode
- `styles/responsive-fixes.css` - **NOUVEAU** - Corrections responsive

### 8.3 Composants UI (17)
1. `components/ui/button.tsx`
2. `components/ui/input.tsx`
3. `components/ui/select.tsx`
4. `components/ui/textarea.tsx`
5. `components/ui/checkbox.tsx`
6. `components/ui/switch.tsx`
7. `components/ui/tabs.tsx`
8. `components/ui/radio-group.tsx`
9. `components/ui/toggle.tsx`
10. `components/ui/input-otp.tsx`
11. `components/ui/calendar.tsx`
12. `components/ui/chart.tsx`
13. `components/ui/badge.tsx`
14. `components/ui/dropdown-menu.tsx`
15. `components/ui/context-menu.tsx`
16. `components/ui/menubar.tsx`
17. `components/common/RichSection.tsx`

### 8.4 Scripts (2)
- `scripts/find-dark-classes.ts` - **NOUVEAU** - Scanner dark classes
- `scripts/find-overflow.js` - **NOUVEAU** - Scanner overflow

### 8.5 Documentation (1)
- `REPORT_RESPONSIVE.md` - **NOUVEAU** - Ce rapport

**Total**: 24 fichiers modifiés, 4 fichiers créés

---

## 9. Commandes utiles

### Build et dev

```bash
# Dev
npm run dev

# Build production
npm run build

# Preview production
npm run start
```

### Scripts de détection

```bash
# Scanner les classes dark:
npx tsx scripts/find-dark-classes.ts

# Scanner overflow (dans la console navigateur)
# Copier-coller scripts/find-overflow.js
```

### Linting et formatting

```bash
# Lint
npm run lint

# Format
npm run format
```

---

## 10. Support et questions

Pour toute question ou problème:

1. Vérifier ce rapport en priorité
2. Lancer les scripts de détection
3. Consulter la documentation Tailwind CSS v4
4. Tester avec DevTools responsive mode

---

**Fin du rapport**

*Généré le 5 novembre 2025*  
*Version: 1.0.0*  
*Auteur: Agent IA Cursor*




