# 🚀 Guide de Déploiement Hostinger - Château Lastours

## 📦 Fichiers Prêts pour le Déploiement

✅ **Archive créée** : `chateau-lastours-hostinger.zip` (1.9 GB)
📍 **Emplacement** : `/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour/`

---

## 🎯 Vue d'Ensemble

Ce guide vous accompagne pas à pas pour déployer votre site Château Lastours sur **Hostinger**.

### Prérequis
- ✅ Compte Hostinger actif (plan Premium ou supérieur recommandé)
- ✅ Domaine configuré
- ✅ Accès au hPanel Hostinger
- ✅ Archive ZIP prête (chateau-lastours-hostinger.zip)

### Temps Estimé
⏱️ **30-60 minutes** (incluant l'upload)

---

## 📋 Étape 1 : Préparation de l'Hébergement

### 1.1 Vérifier votre Plan Hostinger

Connectez-vous à votre [hPanel Hostinger](https://hpanel.hostinger.com/)

**Plans compatibles :**
| Plan | Espace Disque | Recommandé |
|------|---------------|------------|
| Single | 50 GB | ⚠️ Basique (1 site uniquement) |
| Premium | 100 GB | ✅ **Recommandé** |
| Business | 200 GB | ✅ Excellent |

**Votre site nécessite :**
- Minimum : 3 GB d'espace disque
- Bande passante : Illimitée (recommandé)

### 1.2 Vérifier la Configuration PHP/Apache

1. Dans hPanel → **Sites web** → Sélectionnez votre site
2. Cliquez sur **Paramètres avancés**
3. Vérifiez :
   - ✅ **PHP Version** : 8.0+ (n'importe laquelle, le site est statique)
   - ✅ **mod_rewrite** : Activé (normalement activé par défaut)

---

## 📤 Étape 2 : Upload de l'Archive

### Méthode A : Via le Gestionnaire de Fichiers hPanel (Recommandé pour débutants)

#### 2.1 Accéder au Gestionnaire de Fichiers

1. **hPanel** → **Fichiers** → **Gestionnaire de fichiers**
2. Attendez le chargement de l'interface
3. Naviguez vers le dossier **`public_html`**

#### 2.2 Nettoyer public_html (Important !)

⚠️ **Attention** : Sauvegardez tout contenu existant avant de supprimer !

Si `public_html` contient déjà des fichiers :
1. Sélectionnez tous les fichiers (Ctrl+A ou Cmd+A)
2. Cliquez sur **Supprimer** ou **Delete**
3. Confirmez la suppression

Votre `public_html` doit être **vide** avant l'upload.

#### 2.3 Uploader l'Archive

1. Dans `public_html`, cliquez sur le bouton **Télécharger** (Upload)
2. Sélectionnez le fichier `chateau-lastours-hostinger.zip` depuis votre ordinateur
3. Attendez la fin de l'upload (⏱️ 15-45 minutes selon votre connexion)

**Barre de progression** :
```
Uploading: chateau-lastours-hostinger.zip
[████████████████████████] 100%
1.9 GB / 1.9 GB
```

#### 2.4 Extraire l'Archive

1. Une fois l'upload terminé, **clic droit** sur `chateau-lastours-hostinger.zip`
2. Sélectionnez **Extraire** ou **Extract**
3. Destination : **`/public_html`** (ou laissez le chemin par défaut)
4. Cliquez sur **Extraire**
5. Attendez l'extraction (⏱️ 2-5 minutes)

#### 2.5 Vérifier l'Extraction

Après extraction, `public_html` doit contenir :
```
public_html/
├── .htaccess               ← Important !
├── index.html
├── 404.html
├── _next/
│   └── static/
├── les-vins/
├── domaine/
├── actualites/
└── [autres dossiers]
```

✅ **Point de contrôle** : Vérifiez que `.htaccess` est présent !

#### 2.6 Supprimer l'Archive

Une fois l'extraction réussie :
1. Sélectionnez `chateau-lastours-hostinger.zip`
2. Cliquez sur **Supprimer**
3. Confirmez

---

### Méthode B : Via FTP/SFTP (Recommandé pour utilisateurs avancés)

#### 2.1 Récupérer vos Identifiants FTP

1. **hPanel** → **Fichiers** → **Comptes FTP**
2. Notez les informations :
   - **Hôte FTP** : ftp.votredomaine.com (ou IP fournie par Hostinger)
   - **Utilisateur** : votre_utilisateur@votredomaine.com
   - **Mot de passe** : [cliquez sur "Afficher" si nécessaire]
   - **Port** : 21 (FTP) ou 22 (SFTP - **recommandé**)

#### 2.2 Configurer FileZilla

1. Ouvrez FileZilla
2. **Fichier** → **Gestionnaire de Sites** → **Nouveau Site**
3. Configurez :
   ```
   Protocole : SFTP (ou FTP)
   Hôte : ftp.votredomaine.com
   Port : 22 (SFTP) ou 21 (FTP)
   Type d'authentification : Normal
   Utilisateur : votre_utilisateur@votredomaine.com
   Mot de passe : votre_mot_de_passe
   ```
4. Cliquez sur **Connexion**

#### 2.3 Upload via FTP

**Option 1 : Upload direct du contenu**
1. Côté local (gauche) : Naviguez vers `/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour/out/`
2. Côté serveur (droite) : Naviguez vers `/public_html/`
3. Sélectionnez **TOUT** le contenu du dossier `out/` (pas le dossier lui-même)
4. Glissez-déposez vers `public_html/`
5. Attendez la fin du transfert (⏱️ 20-60 minutes)

**Option 2 : Upload de l'archive puis extraction**
1. Uploadez `chateau-lastours-hostinger.zip` vers `public_html/`
2. Suivez l'étape 2.4 de la Méthode A pour extraire via hPanel

---

## ⚙️ Étape 3 : Configuration SSL/HTTPS

### 3.1 Activer le Certificat SSL Gratuit

1. **hPanel** → **Sécurité** → **SSL**
2. Sélectionnez votre domaine
3. Cliquez sur **Installer SSL** ou **Activer SSL**
4. Choisissez **Let's Encrypt** (gratuit)
5. Attendez 1-2 minutes pour l'activation

✅ **Résultat** : Certificat SSL actif

### 3.2 Forcer HTTPS

Votre fichier `.htaccess` contient déjà la règle de redirection automatique :
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Testez : `http://votredomaine.com` → redirige vers → `https://votredomaine.com` ✅

---

## ✅ Étape 4 : Vérifications Post-Déploiement

### 4.1 Tester les Pages Principales

Ouvrez votre navigateur et testez :

```
✓ https://votredomaine.com
✓ https://votredomaine.com/les-vins/
✓ https://votredomaine.com/les-vins/poussin-blanc-2024/
✓ https://votredomaine.com/domaine/histoire/
✓ https://votredomaine.com/actualites/
✓ https://votredomaine.com/reservation/
✓ https://votredomaine.com/club/inscription/
```

### 4.2 Tester la Page 404

Testez une URL inexistante :
```
https://votredomaine.com/page-qui-nexiste-pas
```

Devrait afficher votre page 404 personnalisée ✅

### 4.3 Vérifier les Assets

1. **Images** : Vérifiez qu'elles s'affichent correctement
2. **Styles CSS** : Le design est-il correct ?
3. **Animations** : Les animations GSAP fonctionnent-elles ?
4. **PDFs** : Les fiches techniques sont-elles téléchargeables ?

### 4.4 Tester la Performance

Utilisez ces outils :
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Pingdom](https://tools.pingdom.com/)

**Scores attendus :**
- Performance : 70-90+
- Accessibility : 90+
- Best Practices : 90+
- SEO : 90+

---

## 🔧 Étape 5 : Optimisations Hostinger

### 5.1 Activer la Mise en Cache

Votre `.htaccess` gère déjà le cache navigateur, mais vous pouvez activer le cache serveur :

1. **hPanel** → **Avancé** → **Cache Manager** (si disponible)
2. Activez le cache pour votre site
3. Définissez la durée : **1 mois** pour les assets statiques

### 5.2 Configurer un CDN (Optionnel)

Pour améliorer les performances globales :

1. **hPanel** → **Avancé** → **Cloudflare** (intégration gratuite)
2. Suivez l'assistant de configuration
3. Activez les options :
   - Auto Minify (JS, CSS, HTML)
   - Brotli Compression
   - Browser Cache TTL : 1 month

---

## 🐛 Dépannage

### Problème : Page 404 "Not Found" générique

**Cause** : Le fichier `.htaccess` n'est pas pris en compte

**Solutions** :
1. Vérifiez que `.htaccess` est à la racine de `public_html/`
2. Vérifiez les permissions : clic droit → Permissions → **644** (rw-r--r--)
3. Dans hPanel → **Paramètres avancés** → Vérifiez que **mod_rewrite** est activé

### Problème : Les images ne s'affichent pas

**Solutions** :
1. Vérifiez que le dossier `_next/` est bien uploadé
2. Vérifiez les permissions des dossiers : **755** (rwxr-xr-x)
3. Vérifiez les permissions des fichiers : **644** (rw-r--r--)
4. Videz le cache de votre navigateur (Ctrl+Shift+R)

### Problème : Erreur 500 (Internal Server Error)

**Cause probable** : Erreur dans le fichier `.htaccess`

**Solutions** :
1. Renommez `.htaccess` en `.htaccess.bak`
2. Testez le site
3. Si ça fonctionne, contactez le support Hostinger pour vérifier les modules Apache actifs

### Problème : Le site est très lent

**Solutions** :
1. Activez la compression Brotli/Gzip (déjà dans `.htaccess`)
2. Activez Cloudflare CDN
3. Optimisez les images (voir section ci-dessous)
4. Contactez le support Hostinger pour vérifier les performances du serveur

### Problème : Les routes dynamiques ne fonctionnent pas

**Vérification** :
```bash
# Les URLs suivantes doivent fonctionner :
https://votredomaine.com/les-vins/poussin-blanc-2024/
https://votredomaine.com/actualites/petrichor-rouge-2024/
```

**Solution** : Vérifiez que `mod_rewrite` est activé dans Apache

---

## 📊 Statistiques de Votre Site

```
Total de pages           : 92 pages HTML
Total de fichiers JS     : 78 fichiers
Total de fichiers CSS    : 1 fichier (172 KB)
Total d'images          : 367 images
Total de PDFs           : 57 fiches techniques
Taille totale           : 2.0 GB
Archive compressée      : 1.9 GB
```

---

## 🎯 Checklist Complète de Déploiement

Utilisez cette checklist pour suivre votre progression :

### Préparation
- [ ] Archive `chateau-lastours-hostinger.zip` disponible
- [ ] Compte Hostinger actif
- [ ] Accès hPanel configuré
- [ ] Domaine pointé vers Hostinger

### Upload
- [ ] `public_html` nettoyé (sauvegarde faite si nécessaire)
- [ ] Archive uploadée sur le serveur
- [ ] Archive extraite dans `public_html`
- [ ] Fichier `.htaccess` présent et visible
- [ ] Archive ZIP supprimée du serveur

### Configuration
- [ ] SSL/HTTPS activé (Let's Encrypt)
- [ ] Redirection HTTP → HTTPS fonctionnelle
- [ ] Permissions fichiers : 644
- [ ] Permissions dossiers : 755

### Tests
- [ ] Page d'accueil accessible
- [ ] Toutes les pages principales testées
- [ ] Routes dynamiques (vins, actualités) fonctionnelles
- [ ] Page 404 personnalisée affichée
- [ ] Images chargées correctement
- [ ] PDFs téléchargeables
- [ ] Design et animations OK
- [ ] Test sur mobile et desktop

### Optimisations
- [ ] Cache activé (navigateur + serveur)
- [ ] CDN configuré (optionnel)
- [ ] Test de performance effectué
- [ ] Score PageSpeed > 70

---

## 🔄 Mises à Jour Futures

Pour mettre à jour votre site :

### 1. Modifications Locales
```bash
# Faites vos modifications dans le code
cd "/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour"

# Rebuild
pnpm run clean
pnpm run build

# Créez une nouvelle archive
cd out
zip -r ../chateau-lastours-hostinger-update.zip .
```

### 2. Upload Incrémental (Recommandé)

Utilisez FTP pour uploader **uniquement les fichiers modifiés** :
- Plus rapide que de tout re-uploader
- Conserve les fichiers non modifiés
- Réduit les temps d'indisponibilité

### 3. Upload Complet

Si changements majeurs :
1. Sauvegardez `public_html` actuel
2. Supprimez le contenu
3. Uploadez la nouvelle archive
4. Extrayez

---

## 📞 Support

### Support Hostinger

En cas de problème :
1. **Chat en direct** : Disponible 24/7 dans hPanel
2. **Base de connaissances** : [support.hostinger.com](https://support.hostinger.com)
3. **Email** : Via le formulaire de contact dans hPanel

**Informations à fournir au support :**
- Nom de domaine
- Description du problème
- Message d'erreur exact
- Captures d'écran si possible

### Logs d'Erreurs

Pour diagnostiquer les problèmes :
1. **hPanel** → **Fichiers** → **Gestionnaire de fichiers**
2. Naviguez vers : `/logs/`
3. Téléchargez : `error_log` ou `error.log`

---

## 🎨 Optimisation des Images (Recommandé)

⚠️ **Attention** : Votre site contient des images très volumineuses qui ralentissent le chargement.

### Images Identifiées

```
🚨 Fichiers volumineux détectés :
- Page/Nos : 85 MB (!) ← Critique
- Club : 24 MB
- hero-fallback.webp : 18 MB
- histoire-hero.jpg : 17 MB
- Notre : 17 MB
- Page : 14 MB
- Organiser : 12 MB
```

### Impact
- Temps de chargement : +10-30 secondes
- Consommation de bande passante élevée
- Mauvaise expérience utilisateur mobile

### Solution

Utilisez le script d'optimisation inclus :
```bash
cd "/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour"
pnpm add -D imagemin imagemin-mozjpeg imagemin-pngquant sharp

# Optimiser les images
node scripts/optimize-images.js
```

**Objectifs :**
- Images < 500 KB (idéalement < 200 KB)
- Format WebP pour les navigateurs modernes
- Images responsive (plusieurs tailles)

---

## 🎉 Félicitations !

Votre site **Château Lastours** est maintenant en ligne sur Hostinger ! 🍷

**Prochaines étapes recommandées :**
1. Configurez Google Analytics
2. Ajoutez votre site à Google Search Console
3. Créez un plan de sauvegarde automatique
4. Optimisez les images volumineuses
5. Configurez les emails professionnels (@votredomaine.com)

---

## 📚 Ressources Utiles

- [Documentation Hostinger](https://support.hostinger.com)
- [Next.js Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [Guide .htaccess Apache](https://httpd.apache.org/docs/current/howto/htaccess.html)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

---

**Version du Guide** : 1.0.0
**Dernière mise à jour** : 9 octobre 2025
**Créé pour** : Château Lastours MVP - Déploiement Hostinger

---

## 🆘 Aide Rapide

**Problème urgent ?** Suivez ces étapes :

1. ✅ Vérifiez que `.htaccess` est présent
2. ✅ Vérifiez que SSL est activé
3. ✅ Videz le cache navigateur (Ctrl+Shift+R)
4. ✅ Testez en navigation privée
5. 📞 Contactez le support Hostinger si le problème persiste

**Email de support** : Accessible via hPanel → Support → Nouveau Ticket















