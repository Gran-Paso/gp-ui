#!/bin/bash

# GP UI - Verify Production Build

echo "🔍 Verificando configuración de GP UI..."
echo ""

echo "📁 Archivos .env encontrados:"
ls -la .env* 2>/dev/null || echo "  No se encontraron archivos .env"

echo ""
echo "🔍 Variables VITE configuradas:"
grep "^VITE" .env.production 2>/dev/null || echo "  Usando variables por defecto"

echo ""
echo "🏗️ Ejecutando build de producción..."
export VITE_API_BASE_URL=https://api.granpasochile.cl/api
export VITE_APP_NAME="GP UI"
export VITE_APP_VERSION=$(node -p "require('./package.json').version")

export NODE_OPTIONS="--max-old-space-size=1792"
npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ ERROR: El build falló"
    exit 1
fi

echo ""
echo "✅ Build completado exitosamente!"

echo ""
echo "🔍 Verificando archivos en dist..."
if [ -d "dist" ]; then
    echo "📦 Archivos generados:"
    ls -lh dist/ | grep -E "\\.js|\\.css|\\.html" | awk '{print "  " $9 " (" $5 ")"}'
    
    echo ""
    echo "📊 Estadísticas del build:"
    echo "  Total archivos: $(find dist -type f | wc -l)"
    echo "  Archivos JS: $(find dist -name '*.js' | wc -l)"
    echo "  Archivos CSS: $(find dist -name '*.css' | wc -l)"
else
    echo "❌ No se encontró la carpeta dist"
    exit 1
fi

echo ""
echo "✅ Verificación completada para GP UI!"
echo "🚀 Listo para deploy"
