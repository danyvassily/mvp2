# Checklist de Vérification Post-Déploiement Vercel

**Date:** $(date +%Y-%m-%d)  
**Commit:** fix: remove duplicate image files with incorrect casing for Vercel Linux compatibility

---

## ✅ Étapes Complétées

- [x] Identification du problème (doublons /Page/ vs /page/)
- [x] Suppression des fichiers en double de Git (237 fichiers)
- [x] Mise à jour de .vercelignore
- [x] Commit et push vers origin/main
- [x] Déclenchement du redéploiement Vercel automatique

---

## 🔍 Checklist de Vérification

### 1. Attendre le Déploiement
- [ ] Ouvrir https://vercel.com/danyvassilys-projects
- [ ] Vérifier que le déploiement est "Ready" (2-5 min)
- [ ] Noter l'URL du déploiement

### 2. Test Page d'Accueil
- [ ] Ouvrir la page d'accueil
- [ ] F12 → Onglet Network
- [ ] Filtrer par "Img"
- [ ] Recharger la page (Cmd+R ou Ctrl+R)
- [ ] Vérifier : **0 erreurs 400**
- [ ] Vérifier : Toutes les images retournent **200 OK**

**Images critiques à vérifier :**
```
/_next/image?url=%2Fchateau-lastours-hero.jpg
/_next/image?url=%2Fpage%2Fhomepage%2Fnos-vins-gamme-petrichor.jpg
/_next/image?url=%2Fpage%2Fhomepage%2Fchateau-cote-jardin.jpg
/_next/image?url=%2Fpage%2Fhomepage%2Fchapelle-et-vignes.jpeg
/_next/image?url=%2Fpage%2Fhomepage%2Fmariage-au-chateau.jpg
```

### 3. Test Autres Pages
- [ ] `/gastronomie` - Vérifier images
- [ ] `/degustation` - Vérifier images
- [ ] `/les-vins` - Vérifier images
- [ ] `/domaine/terroir` - Vérifier images

### 4. Vérification Visuelle
- [ ] Toutes les images s'affichent correctement
- [ ] Pas d'images cassées (icône 🖼️ broken)
- [ ] Les images se chargent rapidement
- [ ] Pas de flicker ou rechargement

---

## 🐛 Si des Erreurs 400 Persistent

### Diagnostic
1. **Copier l'URL de l'image en erreur** depuis Network
2. **Vérifier le chemin** demandé (regarder `url=` dans l'URL)
3. **Comparer avec Git** :
   ```bash
   git ls-files public/ | grep -i "[nom-fichier]"
   ```

### Actions Correctives

#### Si le fichier n'existe pas dans Git :
```bash
# Vérifier localement
ls -la public/[chemin]/[fichier]

# Si le fichier existe localement, l'ajouter à Git
git add public/[chemin]/[fichier]
git commit -m "fix: add missing image [nom-fichier]"
git push origin main
```

#### Si problème de casse persistant :
```bash
# Lister tous les fichiers avec le même nom (case insensitive)
find public/ -iname "[nom-fichier]"

# Supprimer la version incorrecte de Git
git rm --cached "public/[chemin-incorrect]"
git commit -m "fix: remove incorrect case version of [nom-fichier]"
git push origin main
```

#### Si problème de cache Vercel :
1. Aller dans Settings du projet Vercel
2. Cliquer sur "Purge Cache"
3. Redéployer

---

## 📊 Résultats Attendus

### Avant (avec erreurs)
```
Status  Type    Name
400     jpeg    image?url=%2FPAGE%2Fhomepage%2F...
400     jpeg    image?url=%2Fpage%2F...
```

### Après (corrigé)
```
Status  Type    Name
200     jpeg    image?url=%2Fpage%2Fhomepage%2Fnos-vins-gamme-petrichor.jpg
200     jpeg    image?url=%2Fpage%2Fhomepage%2Fchateau-cote-jardin.jpg
200     jpeg    image?url=%2Fpage%2Fhomepage%2Fchapelle-et-vignes.jpeg
200     jpeg    image?url=%2Fpage%2Fhomepage%2Fmariage-au-chateau.jpg
200     jpeg    image?url=%2Fchateau-lastours-hero.jpg
```

---

## ✅ Validation Finale

Une fois toutes les cases cochées :

- [ ] **0 erreur 400** sur toutes les pages testées
- [ ] Toutes les images visibles
- [ ] Performance acceptable (images optimisées)
- [ ] Pas de warning dans la Console

---

## 📝 Notes

**Problème résolu :**  
Git contenait des doublons avec casse différente (`/Page/` vs `/page/`). Sur Linux (Vercel), le système de fichiers est case-sensitive, donc les chemins ne correspondaient pas.

**Solution appliquée :**  
Suppression de 237 fichiers en double avec majuscules, conservation des versions normalisées (minuscules, tirets).

**Date de résolution :** 2025-11-10  
**Commit hash :** (à compléter après vérification)

---

**Statut actuel :** ⏳ En attente du redéploiement Vercel

