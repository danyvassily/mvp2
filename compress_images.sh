#!/bin/bash

# Créer un dossier backup
mkdir -p compressed_backup

# Images à compresser
IMAGES=(
  "public/page/Nos evenements - ok/soiree-partenaire-rugby-chateau-lastours-gaillac-france.jpg"
  "public/PHOTOS-WEB-LASTOURS/BOUTEILLES/toutes-gammes/Ordre dégustation.jpg"
  "public/PHOTOS-WEB-LASTOURS/BOUTEILLES/toutes-gammes/Ordre Présentation.jpg"
  "public/PHOTOS-WEB-LASTOURS/EVENT/UAG-DRONE/UAG-LASTOURS-infinitygraphic-14.jpg"
  "public/PHOTOS-WEB-LASTOURS/EVENT/UAG-DRONE/UAG-LASTOURS-infinitygraphic-2.jpg"
  "public/PHOTOS-WEB-LASTOURS/EVENT/UAG-DRONE/UAG-LASTOURS-infinitygraphic-3.jpg"
  "public/PHOTOS-WEB-LASTOURS/EVENT/UAG-DRONE/UAG-LASTOURS-infinitygraphic-12.jpg"
  "public/PHOTOS-WEB-LASTOURS/EVENT/UAG-DRONE/UAG-LASTOURS-infinitygraphic-11.jpg"
  "public/PHOTOS-WEB-LASTOURS/EVENT/UAG-DRONE/UAG-LASTOURS-infinitygraphic-5.jpg"
  "public/PHOTOS-WEB-LASTOURS/EVENT/UAG-DRONE/UAG-LASTOURS-infinitygraphic.jpg"
  "public/PHOTOS-WEB-LASTOURS/EVENT/UAG-DRONE/UAG-LASTOURS-infinitygraphic-9.jpg"
)

# Compresser chaque image
for img in "${IMAGES[@]}"; do
  if [ -f "$img" ]; then
    echo "Compression de: $img"
    # Backup
    cp "$img" "compressed_backup/$(basename "$img")"
    # Compresser avec sips (macOS)
    sips -s formatOptions 75 -Z 3000 "$img" --out "$img" 2>/dev/null
    echo "✅ Compressée: $img ($(du -h "$img" | cut -f1))"
  fi
done

echo "✅ Compression terminée!"
