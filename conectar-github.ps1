# Script PowerShell para conectar el proyecto con GitHub
# Ejecutar: .\conectar-github.ps1

Write-Host "🚀 Conectando proyecto con GitHub..." -ForegroundColor Cyan
Write-Host ""

# Verificar si ya existe un remote
$remoteExists = git remote get-url origin 2>$null

if ($remoteExists) {
    Write-Host "⚠️  Ya existe un repositorio remoto configurado:" -ForegroundColor Yellow
    Write-Host "   $remoteExists" -ForegroundColor Gray
    Write-Host ""
    $response = Read-Host "¿Deseas reemplazarlo? (s/n)"
    
    if ($response -eq "s" -or $response -eq "S") {
        git remote remove origin
        Write-Host "✅ Repositorio remoto anterior eliminado" -ForegroundColor Green
    } else {
        Write-Host "❌ Operación cancelada" -ForegroundColor Red
        exit
    }
}

# Agregar el repositorio remoto
Write-Host "📝 Agregando repositorio remoto..." -ForegroundColor Cyan
git remote add origin https://github.com/Tommytaz2001/Prueba-automatizacion-playwright.git

# Verificar
Write-Host ""
Write-Host "✅ Repositorio remoto configurado:" -ForegroundColor Green
git remote -v

Write-Host ""
Write-Host "📤 Subiendo código a GitHub..." -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  IMPORTANTE: GitHub te pedirá autenticación" -ForegroundColor Yellow
Write-Host "   - Usuario: Tommytaz2001" -ForegroundColor Gray
Write-Host "   - Contraseña: Usa tu Personal Access Token" -ForegroundColor Gray
Write-Host ""

# Intentar hacer push
$pushResult = git push -u origin master 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 ¡Proyecto subido exitosamente a GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🔗 URL del repositorio:" -ForegroundColor Cyan
    Write-Host "   https://github.com/Tommytaz2001/Prueba-automatizacion-playwright" -ForegroundColor Blue
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Error al subir el proyecto" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Posibles soluciones:" -ForegroundColor Yellow
    Write-Host "   1. Verifica que creaste el repositorio en GitHub" -ForegroundColor Gray
    Write-Host "   2. Asegúrate de tener un Personal Access Token válido" -ForegroundColor Gray
    Write-Host "   3. Revisa las instrucciones en INSTRUCCIONES_GIT.md" -ForegroundColor Gray
    Write-Host ""
}
