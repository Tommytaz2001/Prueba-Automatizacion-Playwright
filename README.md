# Proyecto de Automatización Xtrim con Playwright

Proyecto de pruebas automatizadas usando Playwright con TypeScript y el patrón de diseño Page Object Model (POM).

## 📁 Estructura del Proyecto

```
├── README.md
├── package.json
├── tsconfig.json
├── playwright.config.ts
├── .gitignore
├── /tests/
│   └── test_xtrim_procesos.spec.ts    # Tests de procesos Xtrim
├── /pages/
│   ├── base_page.ts                    # Página base con métodos comunes
│   ├── pagina_inicio.ts                # Página de inicio
│   ├── pagina_formulario_contacto.ts   # Formulario de contacto
│   ├── pagina_pagos.ts                 # Página de pagos
│   └── pagina_zapping.ts               # Página Zapping SVA
└── /utils/
    ├── configuracion.ts                # Configuración centralizada
    └── utilidades.ts                   # Funciones de utilidad
```

## 🚀 Instalación

### Prerrequisitos
- Node.js (v16 o superior)
- npm

### Pasos de instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Instalar navegadores de Playwright:**
   ```bash
   npx playwright install
   ```

## 🧪 Ejecutar Pruebas

### Ejecutar todos los tests
```bash
npm run test:xtrim:headed
```

### Ejecutar tests individuales

```bash
# Test 1: Formulario de contacto
npm run test:formulario

# Test 2: Página de pagos
npm run test:pagos

# Test 3: Zapping SVA
npm run test:zapping
```

### Otras opciones

```bash
# Modo headless (sin ver navegador)
npm run test:xtrim

# Modo debug
npm run test:debug

# Modo UI interactivo
npm run test:ui

# Ver reporte
npm run reporte
```

## 📋 Tests Implementados

### Test 1: Formulario de Contacto
- Navega a www.xtrim.com.ec
- Cierra modal de WhatsApp
- Abre formulario de contacto
- Completa todos los campos
- Genera 4 capturas de pantalla

### Test 2: Página de Pagos
- Navega a pagos.xtrim.com.ec
- Valida accesibilidad
- Cierra modal inicial
- Llena número de cédula generado
- Genera 3 capturas de pantalla

### Test 3: Zapping SVA
- Navega a zappingsva.xtrim.com.ec
- Valida accesibilidad
- Hace clic en "Ver más"
- Cierra modal
- Selecciona opción Cédula
- Llena cédula y correo
- Genera 6 capturas de pantalla

## 📸 Capturas de Pantalla

Las capturas se guardan automáticamente en:
```
test-results/screenshots-temp/
```

Formato: `{nombre-test}_{fase}_{timestamp}.png`

## 🎯 Patrón Page Object Model (POM)

Cada página tiene su propio archivo con:
- **Locators**: Selectores de elementos
- **Métodos**: Acciones que se pueden realizar
- **Validaciones**: Verificaciones de estado


## 🔧 Configuración

### Datos de Prueba

Los datos de prueba están en `utils/configuracion.ts`:

```typescript
datosFormularioContacto: {
  nombres: 'Juan Carlos Pérez',
  cedula: '1234567890',
  telefono: '0987654321',
  correo: 'juan.perez@test.com',
}
```

### Generación de Datos

- **Cédula**: Se genera automáticamente
- **Correo**: Se genera con timestamp único


## 📝 Logs

Los tests generan logs informativos:
- ✅ Acciones exitosas
- ℹ️ Información
- ❌ Errores
- 📝 Datos generados
- 📄 Información de páginas

## 🤝 Contribuir

1. Crear una nueva rama
2. Hacer cambios
3. Ejecutar tests
4. Crear Pull Request

## � Referencias y Documentación

Este proyecto utiliza las siguientes tecnologías y recursos:

### Documentación Oficial
- **[Playwright Documentation](https://playwright.dev/docs/intro)** - Documentación oficial de Playwright
- **[Playwright Screenshots](https://playwright.dev/docs/screenshots)** - Guía oficial para capturas de pantalla
- **[Playwright Page Object Model](https://playwright.dev/docs/pom)** - Patrón Page Object Model
- **[Playwright Test Assertions](https://playwright.dev/docs/test-assertions)** - Aserciones y validaciones

### Recursos Adicionales
- **[Allure Report](https://docs.qameta.io/allure/)** - Integración de reportes avanzados
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - Guía de TypeScript

### Implementaciones Específicas
- **Capturas de Pantalla**: Implementadas usando `page.screenshot()` de Playwright
- **Page Object Model**: Patrón de diseño para mantener el código organizado y reutilizable
- **Generación de Datos**: Funciones personalizadas para generar cédulas y correos aleatorios

---

## �📄 Licencia

ISC
