#!/usr/bin/env sh

# Detener en caso de error
set -e

# Construir
echo "Building..."
npm run build

# Navegar al directorio de salida
cd dist

# Inicializar git si no existe
if [ ! -d .git ]; then
  git init
  git checkout -b gh-pages
fi

# Agregar todos los archivos
git add -A

# Commit
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Forzar push a gh-pages
echo "Deploying to gh-pages..."
git push -f git@github.com:Ender-osur/ender-osur.github.io.git gh-pages:gh-pages

cd -

echo "✅ Deployed successfully to https://ender-osur.github.io"
