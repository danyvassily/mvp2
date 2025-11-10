# Guide de Normalisation des Images pour Vercel

## ✅ Modifications Appliquées

### 1. Configuration Next.js (`next.config.mjs`)
- ✅ Ajout de `hostname: "**"` dans `remotePatterns` pour autoriser toutes les images externes
- ✅ Configuration optimisée pour Vercel

### 2. Middleware (`middleware.ts`)
- ✅ Créé pour exclure les requêtes d'images du middleware
- ✅ Pattern configuré pour ne pas intercepter les fichiers statiques

### 3. Fichiers Critiques Corrigés

#### Dossiers renommés :
- ✅ `PHOTOS-WEB-LASTOURS` → `photos-web-lastours`
- ✅ `Photos-GENERAL` → `photos-general`
- ✅ `Gastronomie art de table - manque eventuel photo chambrage` → `gastronomie-art-de-table-manque-eventuel-photo-chambrage`
- ✅ `Photo Menu` → `photo-menu`
- ✅ `Page Team` → `page-team`
- ✅ `Photos page team` → `photos-page-team`

#### Fichiers renommés :
- ✅ `jardins-a-la-francaise-chateau-lastours-gaillac-france.JPG` → `jardins-a-la-francaise-chateau-lastours-gaillac-france.jpg`
- ✅ `IMG_20210102_150820 (1).jpg` → `img-20210102-150820-1.jpg`
- ✅ Tous les fichiers de l'équipe (Photo de groupe, Louis, Adrien, etc.)

#### Fichiers de code mis à jour :
- ✅ `app/gastronomie/page.tsx` - Tous les chemins corrigés
- ✅ `components/header.tsx` - Tous les chemins du menu corrigés
- ✅ `app/domaine/team/page.tsx` - Tous les chemins de l'équipe corrigés
- ✅ `app/les-vins/page.tsx` - Chemin hero corrigé
- ✅ `components/gsap/HeroBarrelsAnimation.tsx` - Chemin hero corrigé

## 📋 Fichiers Restants à Normaliser

Il reste encore quelques dossiers avec des noms problématiques :

### Dossiers principaux :
- `Page/Nos Cuvée-ok` → `Page/nos-cuvee-ok`
- `Page/La vigne - ok` → `Page/la-vigne-ok`
- `Page/Notre Chai - manque 1 photo` → `Page/notre-chai-manque-1-photo`
- `Page/Nos evenements - ok` → `Page/nos-evenements-ok`
- Et d'autres...

### Scripts Disponibles

J'ai créé des scripts pour automatiser le reste :

1. **`scripts/normalize-image-names.js`** - Normalise les noms de fichiers et dossiers
2. **`scripts/update-image-references.js`** - Met à jour les références dans le code
3. **`scripts/normalize-all-images.js`** - Script combiné qui fait tout

### Utilisation

```bash
# Mode simulation (recommandé d'abord)
node scripts/normalize-all-images.js --dry-run

# Exécution réelle
node scripts/normalize-all-images.js
```

## ⚠️ Important

Avant d'exécuter les scripts sur tous les fichiers :

1. **Faire une sauvegarde** : `git commit -a -m "Backup avant normalisation"`
2. **Tester en local** : `npm run build && npm run start`
3. **Vérifier les images** : Toutes les images doivent s'afficher correctement
4. **Déployer sur Vercel** : Une fois vérifié localement

## 🔍 Vérification

Pour vérifier que toutes les images fonctionnent :

```bash
# Build local
npm run build

# Démarrer en mode production
npm run start

# Vérifier les erreurs 404 dans la console du navigateur
```

## 📝 Notes

- Les scripts créent un fichier `image-renames-mapping.json` avec tous les renommages
- Les scripts créent un fichier `image-updates-report.json` avec la liste des fichiers modifiés
- Tous les chemins dans le code sont mis à jour automatiquement

## ✅ Checklist Finale

- [x] `next.config.mjs` configuré
- [x] `middleware.ts` créé
- [x] Fichiers critiques corrigés
- [ ] Scripts exécutés pour le reste (à faire manuellement)
- [ ] Build local testé
- [ ] Déploiement Vercel testé

