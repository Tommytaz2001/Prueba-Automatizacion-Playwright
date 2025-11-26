# 📝 Instrucciones para Subir el Proyecto a GitHub

## ✅ Configuración Local Completada

El repositorio Git ya está inicializado y configurado con:
- **Usuario**: Tommytaz2001
- **Email**: tommytas.apolinario@gmail.com
- **Commit inicial**: ✅ Realizado

---

## 🚀 Pasos para Crear el Repositorio en GitHub

### 1. Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Inicia sesión con tu cuenta **Tommytaz2001**
3. Haz clic en el botón **"New"** (o el ícono **+** → **New repository**)
4. Configura el repositorio:
   - **Repository name**: `Prueba-automatizacion-playwright`
   - **Description**: `Proyecto de automatización con Playwright usando Page Object Model en español`
   - **Visibility**: Public (o Private si prefieres)
   - ⚠️ **NO** marques "Initialize this repository with a README" (ya tenemos uno)
   - ⚠️ **NO** agregues .gitignore ni license (ya los tenemos)
5. Haz clic en **"Create repository"**

---

### 2. Conectar Repositorio Local con GitHub

Después de crear el repositorio en GitHub, ejecuta estos comandos en la terminal:

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/Tommytaz2001/Prueba-automatizacion-playwright.git

# Verificar que se agregó correctamente
git remote -v

# Subir el código al repositorio
git push -u origin master
```

**Nota**: GitHub te pedirá autenticación. Puedes usar:
- **Personal Access Token** (recomendado)
- **GitHub CLI**
- **SSH Key**

---

### 3. Crear Personal Access Token (si es necesario)

Si GitHub te pide autenticación:

1. Ve a GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Haz clic en **"Generate new token"** → **"Generate new token (classic)"**
3. Configura:
   - **Note**: `Playwright Automation Project`
   - **Expiration**: 90 days (o el que prefieras)
   - **Scopes**: Marca **repo** (acceso completo a repositorios)
4. Haz clic en **"Generate token"**
5. **⚠️ IMPORTANTE**: Copia el token inmediatamente (no podrás verlo de nuevo)
6. Usa el token como contraseña cuando Git te lo pida

---

### 4. Comandos Git Útiles

```bash
# Ver estado del repositorio
git status

# Ver historial de commits
git log --oneline

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción del cambio"

# Subir cambios
git push

# Descargar cambios
git pull

# Ver ramas
git branch

# Crear nueva rama
git checkout -b nombre-rama

# Cambiar de rama
git checkout nombre-rama
```

---

## 📦 Estructura del Proyecto Subido

```
Prueba-automatizacion-playwright/
├── .gitignore                          ✅ Configurado
├── README.md                           ✅ Documentación completa
├── package.json                        ✅ Dependencias
├── playwright.config.ts                ✅ Configuración Playwright
├── tsconfig.json                       ✅ Configuración TypeScript
├── /pages/                             ✅ Page Objects en español
│   ├── base_page.ts
│   ├── pagina_inicio.ts
│   ├── pagina_formulario_contacto.ts
│   ├── pagina_pagos.ts
│   └── pagina_zapping.ts
├── /tests/                             ✅ Tests automatizados
│   └── test_xtrim_procesos.spec.ts
└── /utils/                             ✅ Utilidades
    ├── configuracion.ts
    └── utilidades.ts
```

---

## 🔒 Archivos NO Subidos (por .gitignore)

- `node_modules/` - Dependencias (se instalan con `npm install`)
- `test-results/` - Resultados de tests
- `playwright-report/` - Reportes
- `.env` - Variables de entorno sensibles
- `*.log` - Archivos de log

---

## ✅ Verificación

Después de hacer push, verifica:

1. Ve a `https://github.com/Tommytaz2001/Prueba-automatizacion-playwright`
2. Deberías ver todos los archivos del proyecto
3. El README.md se mostrará automáticamente en la página principal
4. Verifica que el .gitignore esté funcionando (no deberías ver node_modules/)

---

## 🎯 Próximos Pasos

1. ✅ Crear el repositorio en GitHub
2. ✅ Conectar con `git remote add origin`
3. ✅ Hacer push inicial
4. 📝 Agregar descripción y topics al repositorio
5. 🏷️ Crear tags para versiones
6. 📋 Configurar GitHub Actions (CI/CD) - opcional

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Tommytaz2001/Prueba-automatizacion-playwright.git
```

### Error: "failed to push some refs"
```bash
git pull origin master --allow-unrelated-histories
git push -u origin master
```

### Cambiar nombre de rama de master a main
```bash
git branch -M main
git push -u origin main
```

---

## 📞 Contacto

- **Usuario GitHub**: Tommytaz2001
- **Email**: tommytas.apolinario@gmail.com
