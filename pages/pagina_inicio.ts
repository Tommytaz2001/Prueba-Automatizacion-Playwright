import { Page, Locator } from '@playwright/test';
import { BasePage } from './base_page';

/**
 * Page Object para la Página de Inicio de Xtrim
 */
export class PaginaInicio extends BasePage {
  readonly botonTeLlamamos: Locator;
  readonly botonCerrarModalWhatsapp: Locator;

  constructor(page: Page) {
    super(page);
    
    // Definir locators
    this.botonTeLlamamos = page.getByRole('link', { name: 'k Te llamamos' });
    this.botonCerrarModalWhatsapp = page.getByText('×').first();
  }

  /**
   * Navegar a la página de inicio de Xtrim
   */
  async irAPaginaInicio() {
    await this.page.goto('https://www.xtrim.com.ec');
  }

  /**
   * Hacer clic en el botón "Te llamamos" para abrir el formulario de contacto
   */
  async abrirFormularioContacto() {
    await this.botonTeLlamamos.click();
  }

  /**
   * Cerrar el modal promocional de WhatsApp que aparece al cargar la página
   */
  async cerrarModalWhatsapp() {
    try {
      await this.page.waitForTimeout(2000);
      
      if (await this.botonCerrarModalWhatsapp.isVisible({ timeout: 3000 })) {
        await this.botonCerrarModalWhatsapp.click();
        await this.page.waitForTimeout(500);
        console.log('✅ Modal de WhatsApp cerrado exitosamente');
        return;
      }
      
      // Alternativa: Intentar con tecla Escape
      await this.page.keyboard.press('Escape');
      console.log('✅ Modal cerrado con tecla Escape');
    } catch (error) {
      console.log('ℹ️ No hay modal para cerrar o ya está cerrado');
    }
  }
}
