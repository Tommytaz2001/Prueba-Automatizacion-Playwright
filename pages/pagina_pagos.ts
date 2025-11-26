import { Page, Locator } from '@playwright/test';
import { BasePage } from './base_page';

/**
 * Page Object para la Página de Pagos de Xtrim
 */
export class PaginaPagos extends BasePage {
  readonly botonContinuar: Locator;
  readonly inputCedula: Locator;

  constructor(page: Page) {
    super(page);
    
    // Definir locators
    this.botonContinuar = page.locator('x-present-modal').getByRole('button', { name: 'Continuar' });
    this.inputCedula = page.locator('input[name="cedula"], input[type="text"]').first();
  }

  /**
   * Navegar a la página de pagos de Xtrim
   */
  async irAPaginaPagos() {
    await this.page.goto('https://pagos.xtrim.com.ec/');
  }

  /**
   * Cerrar el modal inicial que aparece al cargar la página
   */
  async cerrarModalInicial() {
    try {
      await this.botonContinuar.waitFor({ state: 'visible', timeout: 5000 });
      await this.botonContinuar.click();
      await this.page.waitForTimeout(500);
      console.log('✅ Modal de pagos cerrado exitosamente');
    } catch (error) {
      console.log('ℹ️ No hay modal para cerrar o ya está cerrado');
    }
  }

  /**
   * Llenar el número de cédula
   */
  async llenarCedula(cedula: string) {
    await this.inputCedula.fill(cedula);
  }

  /**
   * Verificar que la página cargó correctamente
   */
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
