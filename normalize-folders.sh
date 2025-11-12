#!/bin/bash

# Créer un mapping des anciens vers nouveaux noms
declare -A folders=(
  ["public/ASSET"]="public/asset"
  ["public/PHOTOS-WEB-LASTOURS"]="public/photos-web-lastours"
  ["public/Fiche technique"]="public/fiche-technique"
  ["public/page/Asset page Notre Chai"]="public/page/asset-page-notre-chai"
  ["public/page/Asset page Notre vignoble"]="public/page/asset-page-notre-vignoble"
  ["public/page/Asset page dégustation"]="public/page/asset-page-degustation"
  ["public/page/Asset page la vigne"]="public/page/asset-page-la-vigne"
  ["public/page/Club - ok"]="public/page/club-ok"
  ["public/page/Degustation - ok"]="public/page/degustation-ok"
  ["public/page/Espace presse"]="public/page/espace-presse"
  ["public/page/Gastronomie art de table - manque eventuel photo chambrage"]="public/page/gastronomie-art-de-table-manque-eventuel-photo-chambrage"
  ["public/page/Home page - ok"]="public/page/home-page-ok"
  ["public/page/La vigne - ok"]="public/page/la-vigne-ok"
  ["public/page/Nos Cuvée-ok"]="public/page/nos-cuvee-ok"
  ["public/page/Nos Engagement - ok"]="public/page/nos-engagement-ok"
  ["public/page/Nos evenements - ok"]="public/page/nos-evenements-ok"
  ["public/page/Notre Chai - manque 1 photo"]="public/page/notre-chai-manque-1-photo"
  ["public/page/Notre histoire - ok"]="public/page/notre-histoire-ok"
  ["public/page/Notre vignoble - manque 1 photo"]="public/page/notre-vignoble-manque-1-photo"
  ["public/page/Notre-histoire"]="public/page/notre-histoire"
  ["public/page/Organiser notre évenement - ok"]="public/page/organiser-notre-evenement-ok"
  ["public/page/Organiser votre evenement - ok et inclure cta pour renvoyer ver vos événement"]="public/page/organiser-votre-evenement-ok"
  ["public/page/Page Actualité - ok"]="public/page/page-actualite-ok"
  ["public/page/Page Club"]="public/page/page-club"
  ["public/page/Page Engagement"]="public/page/page-engagement"
  ["public/page/Page Gastronomie art de la table"]="public/page/page-gastronomie-art-de-la-table"
  ["public/page/Page Mécénat - ok"]="public/page/page-mecenat-ok"
  ["public/page/Page Notre histoire"]="public/page/page-notre-histoire"
  ["public/page/Page Team"]="public/page/page-team"
  ["public/page/Page notre Chai dans séction Notre terroir"]="public/page/page-notre-chai"
  ["public/page/Page organiser votre événement"]="public/page/page-organiser-votre-evenement"
  ["public/page/Page visite"]="public/page/page-visite"
  ["public/page/Photo Menu"]="public/page/photo-menu"
  ["public/page/Photo background notre Savoire-Faire"]="public/page/photo-background-savoire-faire"
  ["public/page/Visite - ok"]="public/page/visite-ok"
)

echo "📁 Renaming folders to be Linux/Vercel compatible..."
echo ""

for old_name in "${!folders[@]}"; do
  new_name="${folders[$old_name]}"
  if [ -d "$old_name" ]; then
    echo "Renaming: $old_name → $new_name"
    mv "$old_name" "$new_name"
  fi
done

echo ""
echo "✅ Folder renaming complete!"
