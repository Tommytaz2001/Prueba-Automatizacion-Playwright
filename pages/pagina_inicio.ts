import { Page, Locator } from '@playwright/test';
import { BasePage } from './base_page';

// Página de inicio de Xtrim
export class PaginaInicio extends BasePage {
  readonly botonTeLlamamos: Locator;
  readonly botonCerrarModalWhatsapp: Locator;

  constructor(page: Page) {
    super(page);
    
    this.botonTeLlamamos = page.getByRole('link', { name: 'k Te llamamos' });
    this.botonCerrarModalWhatsapp = page.getByText('×').first();
  }

  async irAPaginaInicio() {
    await this.page.goto('https://www.xtrim.com.ec');
  }

  async abrirFormularioContacto() {
    await this.botonTeLlamamos.click();
  }

  // Cierra el modal de WhatsApp que aparece al cargar
  async cerrarModalWhatsapp() {
    try {
      await this.page.waitForTimeout(2000);
      
      if (await this.botonCerrarModalWhatsapp.isVisible({ timeout: 3000 })) {
        await this.botonCerrarModalWhatsapp.click();
        await this.page.waitForTimeout(500);
        console.log('✅ Modal de WhatsApp cerrado');
        return;
      }
      
      // Si no funciona, intento con Escape
      await this.page.keyboard.press('Escape');
      console.log('✅ Modal cerrado con Escape');
    } catch (error) {
      console.log('ℹ️ No hay modal o ya está cerrado');
    }
  }
}
