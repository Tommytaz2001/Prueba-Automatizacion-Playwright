import { Page, Locator } from '@playwright/test';
import { BasePage } from './base_page';

// Página Zapping SVA
export class PaginaZapping extends BasePage {
  readonly botonVerMas: Locator;
  readonly botonCerrarModal: Locator;
  readonly comboboxCedula: Locator;
  readonly opcionCedula: Locator;
  readonly inputCedula: Locator;
  readonly inputCorreo: Locator;

  constructor(page: Page) {
    super(page);
    
    this.botonVerMas = page.getByText('Ver más');
    this.botonCerrarModal = page.getByLabel('', { exact: true }).getByRole('button');
    this.comboboxCedula = page.getByRole('combobox').first();
    this.opcionCedula = page.getByRole('option', { name: 'Cédula' });
    this.inputCedula = page.getByRole('textbox', { name: 'Ingresa tu número de cedula' });
    this.inputCorreo = page.getByRole('textbox', { name: 'Ingrese su correo electrónico' });
  }

  async irAPaginaZapping() {
    await this.page.goto('https://zappingsva.xtrim.com.ec/');
  }

  async clickVerMas() {
    await this.botonVerMas.click();
  }

  async cerrarModal() {
    try {
      await this.botonCerrarModal.waitFor({ state: 'visible', timeout: 5000 });
      await this.botonCerrarModal.click();
      await this.page.waitForTimeout(500);
      console.log('✅ Modal cerrado');
    } catch (error) {
      console.log('ℹ️ No hay modal o ya está cerrado');
    }
  }

  // Selecciona la opción Cédula del combobox
  async seleccionarOpcionCedula() {
    try {
      console.log('Seleccionando Cédula...');
      
      // Esperar a que el combobox esté visible
      await this.comboboxCedula.waitFor({ state: 'visible', timeout: 5000 });
      
      // Hacer clic en el combobox para abrir las opciones
      await this.comboboxCedula.click();
      await this.page.waitForTimeout(1000);
      
      // Intentar hacer clic en la opción
      const opcionVisible = await this.opcionCedula.isVisible({ timeout: 3000 });
      
      if (opcionVisible) {
        await this.opcionCedula.click();
        console.log('✅ Opción Cédula seleccionada');
        return;
      }
      
      // Si no funciona, intento con teclado
      console.log('Intentando con teclado...');
      await this.comboboxCedula.press('ArrowDown');
      await this.page.waitForTimeout(300);
      await this.comboboxCedula.press('Enter');
      console.log('✅ Opción Cédula seleccionada (teclado)');
      
    } catch (error) {
      console.log('❌ Error al seleccionar opción Cédula:', error);
      throw new Error('No se pudo seleccionar la opción Cédula');
    }
  }

  async llenarCedula(cedula: string) {
    await this.inputCedula.fill(cedula);
  }

  async llenarCorreo(correo: string) {
    await this.inputCorreo.fill(correo);
  }

  async completarFormulario(cedula: string, correo: string) {
    await this.seleccionarOpcionCedula();
    await this.llenarCedula(cedula);
    await this.llenarCorreo(correo);
  }

  async verificarPaginaCargada(): Promise<boolean> {
    try {
      await this.page.waitForLoadState('networkidle');
      const titulo = await this.page.title();
      console.log(`📄 Título de la página: ${titulo}`);
      return titulo.length > 0;
    } catch (error) {
      return false;
    }
  }
}
