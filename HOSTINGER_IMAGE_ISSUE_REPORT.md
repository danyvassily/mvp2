# 🔍 Rapport d'Audit - Images Manquantes sur Hostinger

## 📋 Résumé du Problème

Des images ne s'affichent pas sur le site déployé : https://blanchedalmond-bat-934784.hostingersite.com/

**Diagnostic** : Les images SONT présentes dans le build local et l'archive ZIP, mais ne s'affichent pas sur Hostinger.

---

## ✅ Images Vérifiées (Présentes dans le Build)

### Images de la Page d'Accueil

| Image | Chemin | Taille | Statut Build | Statut Archive |
|-------|--------|--------|--------------|----------------|
| **Hero** | `/chateau-lastours-hero.jpg` | 307 KB | ✅ | ✅ |
| **Logo Header** | `/PHOTOS-WEB-LASTOURS/LOGO/logo-chateau-lastours.jpg` | 18 KB | ✅ | ✅ |
| **Logo Footer** | `/logo-chateau-lastours.png` | 32 KB | ✅ | ✅ |
| **Nos Vins** | `/Page/homepage/Nos vins gamme pétrichor.jpg` | 66 KB | ✅ | ✅ |
| **Château Jardin** | `/Page/homepage/Château côté jardin.JPG` | 103 KB | ✅ | ✅ |
| **Chapelle** | `/Page/homepage/Chapelle et vignes.jpeg` | 1.5 MB | ✅ | ✅ |
| **Mariage** | `/Page/homepage/Mariage au château.jpg` | 329 KB | ✅ | ✅ |

### Statistiques Globales

```
Total d'images dans le build : 369 fichiers
Dossiers d'images principaux :
- /photos : 64 images
- /PHOTOS-WEB-LASTOURS/VIGNES : 29 images
- /PHOTOS-WEB-LASTOURS/Photos-GENERAL : 17 images
- /PHOTOS-WEB-LASTOURS/BOUTEILLES : 13 images
- /Page/homepage : 6 images
```

---

## 🚨 Causes Probables

### 1. Upload Incomplet ⚠️

**Probabilité** : Élevée

**Symptômes** :
- Archive uploadée mais extraction incomplète
- Timeout pendant l'extraction
- Certains dossiers manquants

**Solution** : Re-upload complet via FTP

### 2. Problèmes de Permissions ⚠️

**Probabilité** : Moyenne

**Symptômes** :
- Fichiers présents mais inaccessibles via HTTP
- Erreurs 403 Forbidden dans les logs

**Solution** : Corriger les permissions (644 pour fichiers, 755 pour dossiers)

### 3. Caractères Spéciaux dans les Noms ⚠️

**Probabilité** : Moyenne

**Fichiers à risque** :
- `Nos vins gamme pétrichor.jpg` → accent sur "é"
- `Château côté jardin.JPG` → accents + majuscule .JPG
- `Chapelle et vignes.jpeg` → .jpeg (pas .jpg)

**Solution** : Renommer les fichiers ou vérifier l'encodage

### 4. Chemin Absolu vs Relatif

**Probabilité** : Faible

**Symptômes** :
- Images attendues dans `/public_html/chateau-lastours/` au lieu de `/public_html/`

**Solution** : Vérifier la structure des dossiers sur le serveur

---

## 🔧 Solutions Recommandées

### Solution 1 : Re-upload via FTP (Recommandé)

**Avantages** :
- Plus fiable que l'upload ZIP via interface web
- Vous voyez la progression fichier par fichier
- Pas de timeout d'extraction

**Étapes** :

```bash
# 1. Connectez-vous via FileZilla avec vos identifiants Hostinger
# 2. Naviguez vers public_html/
# 3. Uploadez le CONTENU du dossier out/ (pas le dossier lui-même)
# 4. Attendez la fin du transfert de TOUS les fichiers
```

**Durée estimée** : 30-60 minutes (369 images + fichiers HTML/JS/CSS)

### Solution 2 : Vérifier les Permissions

Si l'upload est complet mais les images ne s'affichent pas :

1. **Via hPanel File Manager** :
   - Sélectionnez tous les fichiers images
   - Clic droit → Permissions
   - Définissez : **644** (rw-r--r--)

2. **Pour les dossiers** :
   - Sélectionnez tous les dossiers
   - Permissions : **755** (rwxr-xr-x)

### Solution 3 : Créer une Archive Sans Caractères Spéciaux

Je vais créer un script pour renommer les fichiers problématiques :

**Fichiers à renommer** :
- `Nos vins gamme pétrichor.jpg` → `nos-vins-gamme-petrichor.jpg`
- `Château côté jardin.JPG` → `chateau-cote-jardin.jpg`
- `Chapelle et vignes.jpeg` → `chapelle-et-vignes.jpg`
- `Mariage au château.jpg` → `mariage-au-chateau.jpg`

⚠️ **Note** : Si vous renommez, il faudra aussi modifier le code source React.

### Solution 4 : Vérifier la Structure du Serveur

**Via hPanel → File Manager** :

Vérifiez que la structure est :
```
public_html/
├── .htaccess                        ← Doit être là
├── index.html                       ← Doit être là
├── chateau-lastours-hero.jpg        ← Doit être là
├── logo-chateau-lastours.png        ← Doit être là
├── _next/
├── Page/
│   └── homepage/
│       ├── Nos vins gamme pétrichor.jpg
│       ├── Château côté jardin.JPG
│       └── ...
└── PHOTOS-WEB-LASTOURS/
    └── LOGO/
        └── logo-chateau-lastours.jpg
```

❌ **PAS COMME ÇA** :
```
public_html/
└── out/                             ← ERREUR !
    ├── index.html
    └── ...
```

---

## 🛠️ Script de Diagnostic

Utilisez ces commandes pour vérifier votre serveur :

### Via FileZilla ou Terminal SSH

```bash
# 1. Lister la structure
ls -la /public_html/

# 2. Vérifier les images critiques
ls -lh /public_html/chateau-lastours-hero.jpg
ls -lh /public_html/Page/homepage/*.jpg

# 3. Vérifier les permissions
ls -l /public_html/Page/homepage/ | grep jpg

# 4. Compter les fichiers uploadés
find /public_html -name "*.jpg" | wc -l
find /public_html -name "*.png" | wc -l
```

**Résultats attendus** :
- `chateau-lastours-hero.jpg` : doit exister avec permissions 644
- Dossier `Page/homepage/` : doit contenir 6 images
- Total JPG : ~350+ fichiers
- Total PNG : ~15+ fichiers

---

## 📋 Checklist de Vérification

### Sur le Serveur Hostinger

Via hPanel → File Manager :

- [ ] Le fichier `index.html` est à la racine de `public_html/`
- [ ] Le fichier `.htaccess` est présent
- [ ] Le dossier `_next/` est présent et contient des fichiers
- [ ] Le dossier `Page/` est présent
- [ ] Le dossier `PHOTOS-WEB-LASTOURS/` est présent
- [ ] L'image `chateau-lastours-hero.jpg` est à la racine
- [ ] L'image `logo-chateau-lastours.png` est à la racine
- [ ] Le dossier `Page/homepage/` contient 6 images

### Tests Browser

- [ ] Ouvrez https://blanchedalmond-bat-934784.hostingersite.com/
- [ ] Ouvrez la Console Développeur (F12)
- [ ] Allez dans l'onglet "Network" ou "Réseau"
- [ ] Rechargez la page (Ctrl+Shift+R)
- [ ] Regardez les erreurs 404 pour les images

**Erreurs typiques** :
```
❌ 404 /chateau-lastours-hero.jpg
❌ 404 /Page/homepage/Nos%20vins%20gamme%20p%C3%A9trichor.jpg
❌ 403 Forbidden
```

---

## 🎯 Plan d'Action Recommandé

### Étape 1 : Diagnostic (5 minutes)

1. Ouvrez https://blanchedalmond-bat-934784.hostingersite.com/
2. F12 → Console → Rechargez la page
3. Notez les erreurs 404 pour les images
4. Vérifiez via hPanel File Manager si les fichiers existent

### Étape 2 : Solution Rapide (10 minutes)

**Si les fichiers existent mais ne s'affichent pas** :
→ Problème de permissions
→ Changez les permissions à 644 (fichiers) et 755 (dossiers)

**Si les fichiers n'existent pas** :
→ Upload incomplet
→ Passez à l'Étape 3

### Étape 3 : Re-upload via FTP (30-60 minutes)

```bash
# IMPORTANT : Utilisez FTP, pas l'upload ZIP !

1. Ouvrez FileZilla
2. Connectez-vous à Hostinger (SFTP recommandé, port 22)
3. Côté local : Naviguez vers le dossier out/
4. Côté serveur : Naviguez vers public_html/
5. Sélectionnez TOUT le contenu de out/
6. Glissez-déposez vers public_html/
7. Attendez que TOUS les 369 images + autres fichiers soient uploadés
8. Vérifiez la progression en bas de FileZilla
```

**⚠️ Ne fermez pas FileZilla pendant le transfert !**

### Étape 4 : Vérification (5 minutes)

1. Videz le cache du navigateur (Ctrl+Shift+Delete)
2. Rechargez https://blanchedalmond-bat-934784.hostingersite.com/
3. Vérifiez que les images s'affichent
4. Testez plusieurs pages (les-vins, domaine/histoire, etc.)

---

## 📊 Comparaison Build vs Serveur

### Build Local ✅

```
Taille totale : 2.0 GB
Fichiers HTML  : 92
Images        : 369
PDFs          : 57
Archive ZIP   : 1.9 GB
```

### Serveur Hostinger ❓

À vérifier avec :
```bash
# Via SSH ou File Manager
du -sh /public_html/
find /public_html -name "*.jpg" | wc -l
```

**Résultats attendus** :
```
Taille totale : ~2.0 GB
Images JPG    : ~350+
Images PNG    : ~15+
```

---

## 🆘 Si Rien ne Fonctionne

### Option 1 : Contactez le Support Hostinger

**Informations à fournir** :
- URL du site : https://blanchedalmond-bat-934784.hostingersite.com/
- Problème : "Images ne s'affichent pas après upload"
- Fichiers concernés : liste des images manquantes
- Actions déjà effectuées : upload ZIP, extraction, vérification permissions

### Option 2 : Vérifiez les Logs d'Erreur

1. hPanel → File Manager
2. Naviguez vers `/logs/`
3. Téléchargez `error_log` ou `error.log`
4. Recherchez les erreurs 404 ou 403 pour les images

### Option 3 : Re-build et Re-upload

Si tout échoue, recommencez depuis zéro :

```bash
# 1. Rebuild local
cd "/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour"
pnpm run clean
pnpm run build

# 2. Nouvelle archive
cd out
zip -r ../chateau-lastours-fresh.zip .

# 3. Upload via FTP (pas ZIP)
# Utilisez FileZilla pour uploader le contenu de out/
```

---

## 📁 Fichiers Générés

Ce rapport est sauvegardé dans :
```
/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour/
└── HOSTINGER_IMAGE_ISSUE_REPORT.md  ← Ce fichier
```

---

## ✅ Résolution Attendue

Après avoir suivi le plan d'action :

- ✅ Toutes les 369 images accessibles
- ✅ Page d'accueil affiche hero + 5 sections avec images
- ✅ Logo header et footer visibles
- ✅ Aucune erreur 404 dans la console
- ✅ Site complètement fonctionnel

**Durée totale estimée** : 45-90 minutes

---

**Dernière mise à jour** : 9 octobre 2025
**Status** : En attente de re-upload FTP















