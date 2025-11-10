#!/bin/bash

# Script de déploiement pour Château Lastours
# Ce script prépare l'application pour le déploiement sur GitHub et Netlify

set -e  # Arrêter en cas d'erreur

echo "🚀 Déploiement Château Lastours - Préparation..."
echo ""

# Couleurs pour les messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erreur: Vous devez exécuter ce script depuis le dossier chateaulastour/${NC}"
    exit 1
fi

echo -e "${GREEN}✓${NC} Répertoire correct détecté"
echo ""

# 1. Nettoyer les anciens builds
echo "📦 Nettoyage des anciens builds..."
pnpm run clean || true
echo -e "${GREEN}✓${NC} Nettoyage terminé"
echo ""

# 2. Vérifier les dépendances
echo "📥 Vérification des dépendances..."
if [ ! -d "node_modules" ]; then
    echo "Installation des dépendances..."
    pnpm install
else
    echo "Dépendances déjà installées"
fi
echo -e "${GREEN}✓${NC} Dépendances à jour"
echo ""

# 3. Vérifier TypeScript
echo "🔍 Vérification TypeScript..."
pnpm run check-types || echo -e "${YELLOW}⚠️ Des erreurs TypeScript ont été détectées (elles seront ignorées lors du build)${NC}"
echo ""

# 4. Build de production
echo "🏗️  Build de production..."
pnpm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} Build réussi !"
    echo ""
    
    # Vérifier que le dossier out/ existe
    if [ -d "out" ]; then
        echo -e "${GREEN}✓${NC} Dossier out/ créé avec succès"
        echo "   Taille du build: $(du -sh out | cut -f1)"
    else
        echo -e "${RED}❌ Erreur: Le dossier out/ n'a pas été créé${NC}"
        exit 1
    fi
else
    echo -e "${RED}❌ Erreur lors du build${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Préparation terminée avec succès !${NC}"
echo ""
echo "📤 Prochaines étapes pour déployer sur GitHub :"
echo ""
echo "1. Vérifier les changements :"
echo "   git status"
echo ""
echo "2. Ajouter les fichiers modifiés :"
echo "   git add ."
echo ""
echo "3. Créer un commit :"
echo "   git commit -m 'feat: Application prête pour le déploiement'"
echo ""
echo "4. Mettre à jour le remote (si nécessaire) :"
echo "   git remote set-url origin git@github.com:danyvassily/chateauxlastversion.git"
echo ""
echo "5. Pusher sur GitHub :"
echo "   git push -u origin main"
echo ""
echo "📖 Pour plus de détails, consultez DEPLOYMENT_GUIDE.md"
echo ""




