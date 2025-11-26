import { Page } from '@playwright/test';

/**
 * Página Base con métodos comunes para todos los Page Objects
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navegar a una URL específica
   */
  async irA(url: string) {
    await this.page.goto(url);
  }

  /**
   * Obtener la URL actual
   */
  obtenerUrl(): string {
    return this.page.url();
  }

  /**
   * Esperar que la navegación se complete
   */
  async esperarCargaCompleta() {
    await this.page.waitForLoadState('networkidle');
  }
}
