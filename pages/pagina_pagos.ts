import { Page, Locator } from '@playwright/test';
import { BasePage } from './base_page';

// Página de pagos
export class PaginaPagos extends BasePage {
  readonly botonContinuar: Locator;
  readonly inputCedula: Locator;

  constructor(page: Page) {
    super(page);
    
    this.botonContinuar = page.locator('x-present-modal').getByRole('button', { name: 'Continuar' });
    this.inputCedula = page.locator('input[name="cedula"], input[type="text"]').first();
  }

  async irAPaginaPagos() {
    await this.page.goto('https://pagos.xtrim.com.ec/');
  }

  // Cierra el modal inicial
  async cerrarModalInicial() {
    try {
      await this.botonContinuar.waitFor({ state: 'visible', timeout: 5000 });
      await this.botonContinuar.click();
      await this.page.waitForTimeout(500);
      console.log('✅ Modal cerrado');
    } catch (error) {
      console.log('ℹ️ No hay modal o ya está cerrado');
    }
  }

  async llenarCedula(cedula: string) {
    await this.inputCedula.fill(cedula);
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
