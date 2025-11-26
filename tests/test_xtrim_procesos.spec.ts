import { test, expect } from '@playwright/test';
import { PaginaInicio } from '../pages/pagina_inicio';
import { PaginaFormularioContacto } from '../pages/pagina_formulario_contacto';
import { PaginaPagos } from '../pages/pagina_pagos';
import { PaginaZapping } from '../pages/pagina_zapping';
import { configuracion } from '../utils/configuracion';
import { generarCedula, generarNombreCaptura, generarCorreoAleatorio } from '../utils/utilidades';
import * as fs from 'fs';
import * as path from 'path';

test.describe('Xtrim - Procesos Automatizados', () => {
  
  // Test 1: Formulario de Contacto en Página Principal
  test('debe completar el formulario de contacto con validaciones y capturas', async ({ page }) => {
    // Crear directorio para capturas
    const directorioCapturas = path.join(process.cwd(), 'test-results', 'screenshots-temp');
    if (!fs.existsSync(directorioCapturas)) {
      fs.mkdirSync(directorioCapturas, { recursive: true });
    }

    // Inicializar páginas
    const paginaInicio = new PaginaInicio(page);
    const paginaFormulario = new PaginaFormularioContacto(page);
    const datosPrueba = configuracion.datosFormularioContacto;

    // Navegar a la página de inicio
    await paginaInicio.irAPaginaInicio();
    await paginaInicio.esperarCargaCompleta();
    await paginaInicio.cerrarModalWhatsapp();

    // Validar que la página es accesible
    console.log('✅ Validando accesibilidad de la página principal...');
    const urlActual = paginaInicio.obtenerUrl();
    expect(urlActual).toContain('xtrim.com.ec');
    console.log('✅ Página principal accesible');

    // Captura 1: Página principal cargada
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('formulario-contacto', '01-pagina-principal')),
      fullPage: true 
    });

    // Abrir formulario de contacto
    await paginaInicio.abrirFormularioContacto();
    await page.waitForTimeout(1000);

    // Captura 2: Formulario abierto
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('formulario-contacto', '02-formulario-abierto')),
      fullPage: true 
    });
    
    // Completar formulario
    await paginaFormulario.completarFormulario(datosPrueba);

    // Captura 3: Formulario completado
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('formulario-contacto', '03-formulario-completado')),
      fullPage: true 
    });

    // Verificar que el formulario se llenó correctamente
    expect(await paginaFormulario.estaAutorizacionMarcada()).toBeTruthy();
    console.log('✅ Formulario de contacto completado exitosamente');

    await page.waitForTimeout(2000);

    // Captura 4: Estado final
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('formulario-contacto', '04-estado-final')),
      fullPage: true 
    });
  });

  // Test 2: Validar Página de Pagos y Llenar Cédula
  test('debe validar accesibilidad de página de pagos y llenar cédula', async ({ page }) => {
    // Crear directorio para capturas
    const directorioCapturas = path.join(process.cwd(), 'test-results', 'screenshots-temp');
    if (!fs.existsSync(directorioCapturas)) {
      fs.mkdirSync(directorioCapturas, { recursive: true });
    }

    // Inicializar página y generar datos
    const paginaPagos = new PaginaPagos(page);
    const cedula = generarCedula();
    console.log(`📝 Cédula generada: ${cedula}`);

    // Navegar a página de pagos
    await paginaPagos.irAPaginaPagos();
    await page.waitForLoadState('networkidle');

    // Captura 1: Página cargada
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('pagina-pagos', '01-pagina-cargada')),
      fullPage: true 
    });

    // Validar accesibilidad
    const paginaAccesible = await paginaPagos.verificarPaginaCargada();
    expect(paginaAccesible).toBeTruthy();
    console.log('✅ Página de pagos accesible y cargada correctamente');

    // Cerrar modal inicial
    await paginaPagos.cerrarModalInicial();
    await page.waitForTimeout(1000);

    // Captura 2: Modal cerrado
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('pagina-pagos', '02-modal-cerrado')),
      fullPage: true 
    });

    // Llenar cédula
    await paginaPagos.llenarCedula(cedula);
    console.log('✅ Cédula ingresada exitosamente');

    // Captura 3: Cédula ingresada
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('pagina-pagos', '03-cedula-ingresada')),
      fullPage: true 
    });

    await page.waitForTimeout(1000);
  });

  // Test 3: Validar Página Zapping SVA y Completar Formulario
  test('debe validar accesibilidad de Zapping SVA y completar formulario', async ({ page }) => {
    // Crear directorio para capturas
    const directorioCapturas = path.join(process.cwd(), 'test-results', 'screenshots-temp');
    if (!fs.existsSync(directorioCapturas)) {
      fs.mkdirSync(directorioCapturas, { recursive: true });
    }

    // Inicializar página y generar datos
    const paginaZapping = new PaginaZapping(page);
    const cedula = generarCedula();
    const correo = generarCorreoAleatorio();
    console.log(`📝 Cédula generada: ${cedula}`);
    console.log(`📧 Correo generado: ${correo}`);

    // Navegar a página Zapping SVA
    await paginaZapping.irAPaginaZapping();
    await page.waitForLoadState('networkidle');

    // Captura 1: Página cargada
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('zapping-sva', '01-pagina-cargada')),
      fullPage: true 
    });

    // Validar accesibilidad
    const paginaAccesible = await paginaZapping.verificarPaginaCargada();
    expect(paginaAccesible).toBeTruthy();
    console.log('✅ Página Zapping SVA accesible y cargada correctamente');

    // Hacer clic en "Ver más"
    await paginaZapping.clickVerMas();
    await page.waitForTimeout(1000);

    // Captura 2: Modal abierto
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('zapping-sva', '02-modal-abierto')),
      fullPage: true 
    });

    // Cerrar modal
    await paginaZapping.cerrarModal();
    await page.waitForTimeout(1000);

    // Captura 3: Modal cerrado
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('zapping-sva', '03-modal-cerrado')),
      fullPage: true 
    });

    // Seleccionar opción Cédula
    await paginaZapping.seleccionarOpcionCedula();
    await page.waitForTimeout(500);

    // Captura 4: Opción cédula seleccionada
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('zapping-sva', '04-cedula-seleccionada')),
      fullPage: true 
    });

    // Llenar cédula
    await paginaZapping.llenarCedula(cedula);
    console.log('✅ Cédula ingresada exitosamente');

    // Captura 5: Cédula ingresada
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('zapping-sva', '05-cedula-ingresada')),
      fullPage: true 
    });

    // Llenar correo
    await paginaZapping.llenarCorreo(correo);
    console.log('✅ Correo ingresado exitosamente');

    // Captura 6: Formulario completado
    await page.screenshot({ 
      path: path.join(directorioCapturas, generarNombreCaptura('zapping-sva', '06-formulario-completado')),
      fullPage: true 
    });

    await page.waitForTimeout(1000);
  });
});
