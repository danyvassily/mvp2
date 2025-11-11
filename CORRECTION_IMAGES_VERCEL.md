# Correction Critique - Images 400 sur Vercel

## Problème Identifié

### Cause racine
Git contenait **2 versions** de chaque fichier image :
1. `public/Page/homepage/...` (ancien - avec majuscule + espaces)
2. `public/page/homepage/...` (nouveau - minuscule + tirets)

### Pourquoi cela causait des erreurs 400 ?

**Système de fichiers :**
- **macOS/Windows** : Case-insensitive → `/Page/` = `/page/` (les deux marchent)
- **Linux (Vercel)** : Case-sensitive → `/Page/` ≠ `/page/` (seul le bon chemin marche)

**Le code** utilisait `/page/homepage/chateau-cote-jardin.jpg`  
**Git** contenait aussi `public/Page/homepage/Château côté jardin.JPG`  
→ **Résultat** : Sur Vercel (Linux), le fichier n'était pas trouvé → 400

## Corrections Appliquées

### 1. Suppression des anciennes versions
```bash
git rm -r "public/Page" --cached
```

Fichiers supprimés de Git :
- `public/Page/homepage/Chapelle et vignes.jpeg`
- `public/Page/homepage/Château côté jardin.JPG`
- `public/Page/homepage/Mariage au château.jpg`
- `public/Page/homepage/Nos vins gamme pétrichor.jpg`

### 2. Conservation des versions normalisées
Fichiers gardés (minuscules, sans espaces) :
- `public/page/homepage/chapelle-et-vignes.jpeg`
- `public/page/homepage/chateau-cote-jardin.jpg`
- `public/page/homepage/mariage-au-chateau.jpg`
- `public/page/homepage/nos-vins-gamme-petrichor.jpg`

### 3. Correction .vercelignore
Ajout de règles explicites pour ne pas ignorer les dossiers actifs :
```
!public/photos-web-lastours/
!public/page/
!public/asset/
```

## Fichiers Modifiés

1. ✅ `.vercelignore` - Règles clarifiées
2. ✅ `public/Page/` - Supprimé de Git
3. ✅ `public/page/` - Conservé (versions normalisées)

## Prochaines Étapes

### 1. Commit et Push
```bash
git add -A
git commit -m "fix: remove duplicate image files with incorrect casing"
git push origin main
```

### 2. Vérification Post-Déploiement

Une fois déployé sur Vercel, ouvrir DevTools → Network et vérifier :
- ✅ Toutes les requêtes `/_next/image?url=...` retournent **200 OK**
- ✅ Aucune erreur 400

### 3. Pages à Tester
- `/` (homepage)
- `/gastronomie`
- `/degustation`
- `/les-vins`

## Résumé

**Avant :**
- 2 versions de chaque fichier dans Git
- Case mismatch entre code et fichiers
- Erreurs 400 sur Vercel (Linux case-sensitive)

**Après :**
- 1 seule version normalisée par fichier
- Chemins cohérents (minuscules, tirets)
- Plus d'erreurs 400 (fichiers trouvés correctement)

## Commande de Commit

```bash
cd "/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour"
git add -A
git commit -m "fix: remove duplicate image files with incorrect casing for Vercel compatibility"
git push origin main
```

---

**Date:** 2025-11-10  
**Statut:** ✅ Corrections appliquées, prêt pour commit

