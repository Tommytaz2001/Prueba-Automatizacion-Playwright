import { Page } from '@playwright/test';

// Clase base para reutilizar métodos comunes en todas las páginas
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navegar a una URL
  async irA(url: string) {
    await this.page.goto(url);
  }

  // Obtener URL actual
  obtenerUrl(): string {
    return this.page.url();
  }

  // Esperar a que termine de cargar la página
  async esperarCargaCompleta() {
    await this.page.waitForLoadState('networkidle');
  }
}
