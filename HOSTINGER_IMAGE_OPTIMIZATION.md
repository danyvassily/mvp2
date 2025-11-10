# 🖼️ Guide d'Optimisation des Images pour Hostinger

## ⚠️ Problème Identifié

Lors du test du build, **plusieurs images volumineuses** ont été détectées, impactant significativement les performances.

---

## 📊 Analyse des Images Problématiques

### Fichiers Critiques (>10 MB)

```
🚨 URGENT - Fichiers très volumineux :
├── Page/Nos (fichier 1)              : 85 MB   ❌ CRITIQUE
├── Club                               : 24 MB   ❌ CRITIQUE
├── hero-fallback.webp                 : 18 MB   ❌ CRITIQUE
├── histoire-hero.jpg                  : 17 MB   ❌ CRITIQUE
├── Notre (fichier 2)                  : 17 MB   ❌ CRITIQUE
├── Page (fichier 1)                   : 14 MB   ⚠️ Important
├── Organiser                          : 12 MB   ⚠️ Important
├── Page (fichier 2)                   : 12 MB   ⚠️ Important
├── Notre (fichier 3)                  : 11 MB   ⚠️ Important
├── Notre (fichier 4)                  : 6-8 MB  ⚠️ Moyen
└── Autres (>5MB)                      : ~20 fichiers
```

### Impact sur les Performances

**Temps de chargement estimés** (connexion 4G moyenne) :
- Page d'accueil avec hero de 18 MB : **+15-25 secondes**
- Page club avec image de 24 MB : **+20-30 secondes**
- Page avec image de 85 MB : **+60-90 secondes** ❌ Inacceptable

**Impact SEO** :
- Score Google PageSpeed : **15-30/100** ❌
- Pénalité dans les résultats de recherche
- Taux de rebond élevé (utilisateurs quittent avant chargement)

---

## 🎯 Objectifs d'Optimisation

### Tailles Cibles

| Type d'Image | Taille Actuelle | Taille Cible | Format |
|--------------|-----------------|--------------|--------|
| Hero Images | 15-85 MB | **< 300 KB** | WebP |
| Images Produits | 5-10 MB | **< 150 KB** | WebP |
| Galerie Photos | 5-20 MB | **< 200 KB** | WebP |
| Thumbnails | 1-5 MB | **< 50 KB** | WebP |
| Icônes/Logos | 500 KB-2 MB | **< 50 KB** | SVG/WebP |

### Gains Attendus

- 🚀 **Temps de chargement** : -70% à -90%
- 📈 **Score PageSpeed** : De 15-30 → 70-90+
- 💾 **Taille du build** : De 2.0 GB → **< 500 MB**
- 📱 **Expérience mobile** : Amélioration drastique

---

## 🔧 Solution 1 : Script d'Optimisation Automatique

### Étape 1 : Installer les Dépendances

```bash
cd "/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour"

# Installer les outils d'optimisation
pnpm add -D sharp imagemin imagemin-mozjpeg imagemin-pngquant imagemin-webp
```

### Étape 2 : Créer le Script d'Optimisation

Créez le fichier : `scripts/optimize-images-aggressive.js`

```javascript
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

// Configuration
const CONFIG = {
  sourceDir: './out',
  quality: {
    jpeg: 85,
    webp: 85,
    png: 85
  },
  maxWidth: {
    hero: 1920,      // Images hero/bannières
    standard: 1200,  // Images standard
    thumbnail: 600   // Miniatures
  },
  maxSize: {
    hero: 300 * 1024,      // 300 KB
    standard: 150 * 1024,   // 150 KB
    thumbnail: 50 * 1024    // 50 KB
  }
};

// Fonction pour déterminer le type d'image
function getImageType(filePath) {
  const fileName = path.basename(filePath).toLowerCase();
  
  if (fileName.includes('hero') || fileName.includes('banner')) {
    return 'hero';
  }
  if (fileName.includes('thumb') || fileName.includes('small')) {
    return 'thumbnail';
  }
  return 'standard';
}

// Fonction pour optimiser une image
async function optimizeImage(filePath) {
  const imageType = getImageType(filePath);
  const maxWidth = CONFIG.maxWidth[imageType];
  
  try {
    const stats = await fs.stat(filePath);
    const originalSize = stats.size;
    
    // Ignorer les petites images déjà optimisées
    if (originalSize < 100 * 1024) {
      console.log(`✓ Déjà optimisé : ${path.basename(filePath)} (${(originalSize / 1024).toFixed(2)} KB)`);
      return;
    }
    
    console.log(`🔄 Optimisation : ${path.basename(filePath)} (${(originalSize / 1024 / 1024).toFixed(2)} MB)`);
    
    // Lire les métadonnées
    const metadata = await sharp(filePath).metadata();
    
    // Calculer la nouvelle largeur
    let newWidth = metadata.width;
    if (newWidth > maxWidth) {
      newWidth = maxWidth;
    }
    
    // Créer un fichier temporaire
    const tempPath = filePath + '.tmp';
    
    // Optimiser selon le format
    if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
      await sharp(filePath)
        .resize(newWidth, null, { withoutEnlargement: true })
        .jpeg({ 
          quality: CONFIG.quality.jpeg,
          progressive: true,
          mozjpeg: true
        })
        .toFile(tempPath);
    } else if (metadata.format === 'png') {
      await sharp(filePath)
        .resize(newWidth, null, { withoutEnlargement: true })
        .png({ 
          quality: CONFIG.quality.png,
          compressionLevel: 9,
          adaptiveFiltering: true
        })
        .toFile(tempPath);
    } else if (metadata.format === 'webp') {
      await sharp(filePath)
        .resize(newWidth, null, { withoutEnlargement: true })
        .webp({ 
          quality: CONFIG.quality.webp,
          effort: 6
        })
        .toFile(tempPath);
    } else {
      console.log(`⚠️ Format non supporté : ${metadata.format}`);
      return;
    }
    
    // Vérifier la taille du fichier optimisé
    const tempStats = await fs.stat(tempPath);
    const newSize = tempStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    // Remplacer le fichier original
    await fs.unlink(filePath);
    await fs.rename(tempPath, filePath);
    
    console.log(`✅ Optimisé : ${path.basename(filePath)}`);
    console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024).toFixed(2)} KB (-${reduction}%)\n`);
    
  } catch (error) {
    console.error(`❌ Erreur lors de l'optimisation de ${filePath}:`, error.message);
  }
}

// Fonction principale
async function main() {
  console.log('🚀 Démarrage de l\'optimisation des images...\n');
  
  // Trouver toutes les images
  const patterns = [
    `${CONFIG.sourceDir}/**/*.jpg`,
    `${CONFIG.sourceDir}/**/*.jpeg`,
    `${CONFIG.sourceDir}/**/*.png`,
    `${CONFIG.sourceDir}/**/*.webp`
  ];
  
  let allFiles = [];
  for (const pattern of patterns) {
    const files = await glob(pattern, { nodir: true });
    allFiles = allFiles.concat(files);
  }
  
  console.log(`📊 ${allFiles.length} images trouvées\n`);
  
  // Optimiser chaque image
  let processed = 0;
  for (const file of allFiles) {
    await optimizeImage(file);
    processed++;
    
    if (processed % 10 === 0) {
      console.log(`📈 Progression : ${processed}/${allFiles.length} images\n`);
    }
  }
  
  console.log('✅ Optimisation terminée !\n');
}

main().catch(console.error);
```

### Étape 3 : Exécuter l'Optimisation

```bash
# IMPORTANT : Sauvegardez d'abord votre dossier out/
cp -r out out.backup

# Exécuter l'optimisation
node scripts/optimize-images-aggressive.js
```

**Durée estimée** : 10-30 minutes selon le nombre d'images

### Étape 4 : Vérifier les Résultats

```bash
# Comparer les tailles
du -sh out/ out.backup/

# Vérifier les gros fichiers restants
find out/ -type f -size +1M -exec ls -lh {} \; | awk '{print $9, ":", $5}'
```

---

## 🔧 Solution 2 : Optimisation Manuelle des Images Critiques

Si vous préférez optimiser manuellement les images les plus lourdes :

### Outils Recommandés

**En ligne (gratuit) :**
- [Squoosh.app](https://squoosh.app/) - Par Google, excellent pour WebP
- [TinyPNG](https://tinypng.com/) - Compression PNG/JPEG
- [Compressor.io](https://compressor.io/) - Multi-formats

**Logiciels (gratuit) :**
- **ImageOptim** (Mac) - Compression sans perte
- **GIMP** (Windows/Mac/Linux) - Redimensionnement + compression
- **XnConvert** (Windows/Mac/Linux) - Batch processing

### Processus Manuel

#### Pour l'image de 85 MB (CRITIQUE)

1. **Identifier le fichier** :
```bash
cd "/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour/out"
find . -type f -size +80M
```

2. **Ouvrir dans Squoosh.app** :
   - Glissez-déposez l'image
   - Sélectionnez le format **WebP**
   - Qualité : **85**
   - Redimensionnez à **1920px** de largeur max
   - Téléchargez l'image optimisée

3. **Remplacer le fichier** :
```bash
# Remplacez le fichier original par la version optimisée
```

4. **Vérifier** :
```bash
# Objectif : < 300 KB
ls -lh chemin/vers/image.webp
```

#### Pour les hero images (18 MB, 17 MB, etc.)

Répétez le processus ci-dessus pour chaque image hero :
- Format : **WebP**
- Qualité : **85-90**
- Largeur max : **1920px**
- Objectif : **< 300 KB**

---

## 🚀 Solution 3 : Images Responsive (Avancé)

Pour une optimisation maximale, créez plusieurs tailles d'images :

### Script de Génération d'Images Responsive

```javascript
// scripts/generate-responsive-images.js
const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

const SIZES = {
  mobile: 640,
  tablet: 1024,
  desktop: 1920
};

async function generateResponsiveImages(imagePath) {
  const ext = path.extname(imagePath);
  const basename = path.basename(imagePath, ext);
  const dirname = path.dirname(imagePath);
  
  for (const [size, width] of Object.entries(SIZES)) {
    const outputPath = path.join(dirname, `${basename}-${size}.webp`);
    
    await sharp(imagePath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log(`✓ Créé : ${basename}-${size}.webp`);
  }
}

// Utilisation
const heroImages = [
  './out/Page/_common/hero-fallback.webp',
  './out/Page/_common/histoire-hero.jpg'
  // Ajoutez vos images ici
];

(async () => {
  for (const img of heroImages) {
    await generateResponsiveImages(img);
  }
})();
```

Ensuite, mettez à jour vos composants React pour utiliser `srcSet` :

```tsx
<img
  src="/hero-fallback-desktop.webp"
  srcSet="
    /hero-fallback-mobile.webp 640w,
    /hero-fallback-tablet.webp 1024w,
    /hero-fallback-desktop.webp 1920w
  "
  sizes="100vw"
  alt="Hero"
/>
```

---

## 📊 Avant/Après Comparaison

### Build Actuel (Non Optimisé)

```
Taille totale : 2.0 GB
Archive ZIP   : 1.9 GB
Images > 5MB  : ~30 fichiers
Plus gros     : 85 MB
Score PageSpeed : 15-30/100
Temps chargement : 30-90 secondes
```

### Build Optimisé (Attendu)

```
Taille totale : ~400-600 MB (-70%)
Archive ZIP   : ~350-500 MB (-74%)
Images > 5MB  : 0 fichiers
Plus gros     : < 300 KB
Score PageSpeed : 70-90/100
Temps chargement : 2-5 secondes
```

---

## 🎯 Recommandations Finales

### Priorités

1. **URGENT** - Optimisez l'image de 85 MB
2. **URGENT** - Optimisez les hero images (18 MB, 17 MB)
3. **Important** - Optimisez les images > 10 MB
4. **Moyen** - Optimisez toutes les images > 1 MB
5. **Bonus** - Implémentez les images responsive

### Workflow Recommandé

```bash
# 1. Sauvegardez les sources originales
cp -r public/ public.backup/

# 2. Optimisez les sources AVANT le build
node scripts/optimize-images-aggressive.js --source public/

# 3. Rebuild avec images optimisées
pnpm run clean
pnpm run build

# 4. Vérifiez la nouvelle taille
du -sh out/

# 5. Créez la nouvelle archive
cd out
zip -r ../chateau-lastours-hostinger-optimized.zip .
```

### Résultats Attendus

- 🚀 Site 10x plus rapide
- 💰 Économies de bande passante
- 📈 Meilleur SEO
- 😊 Meilleure expérience utilisateur

---

## 🔍 Vérification Post-Optimisation

### Checklist

- [ ] Toutes les images < 500 KB
- [ ] Hero images < 300 KB
- [ ] Taille totale du build < 700 MB
- [ ] Archive ZIP < 600 MB
- [ ] Test visuel : qualité acceptable
- [ ] Test PageSpeed : score > 70
- [ ] Test chargement : < 5 secondes

### Commandes de Vérification

```bash
# Lister les gros fichiers restants
find out/ -type f -size +500k -exec ls -lh {} \; | sort -k5 -hr | head -20

# Taille totale
du -sh out/

# Nombre d'images par taille
echo "Images > 1MB:" && find out/ -name "*.jpg" -o -name "*.png" -o -name "*.webp" | xargs ls -lh | awk '$5 ~ /M/ && $5+0 > 1' | wc -l
```

---

## 📞 Besoin d'Aide ?

Si vous rencontrez des problèmes avec l'optimisation :

1. Vérifiez que `sharp` est bien installé : `pnpm list sharp`
2. Testez sur une seule image d'abord
3. Gardez toujours une sauvegarde des originaux
4. N'hésitez pas à ajuster la qualité (75-95)

---

**Version** : 1.0.0
**Date** : 9 octobre 2025
**Impact** : Critique pour les performances Hostinger















