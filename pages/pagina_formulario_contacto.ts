import { Page, Locator } from '@playwright/test';
import { BasePage } from './base_page';

/**
 * Page Object para el Formulario de Contacto
 */
export class PaginaFormularioContacto extends BasePage {
  readonly inputNombres: Locator;
  readonly inputCedula: Locator;
  readonly inputTelefono: Locator;
  readonly inputCorreo: Locator;
  readonly checkboxAutorizacion: Locator;

  constructor(page: Page) {
    super(page);
    
    // Definir locators
    this.inputNombres = page.getByRole('textbox', { name: 'Nombres' });
    this.inputCedula = page.getByRole('textbox', { name: 'Cédula' });
    this.inputTelefono = page.getByRole('textbox', { name: 'Teléfono' });
    this.inputCorreo = page.getByRole('textbox', { name: 'Correo electrónico' });
    this.checkboxAutorizacion = page.getByRole('checkbox', { name: 'Al dar clic, autorizas el uso' });
  }

  /**
   * Llenar el formulario de contacto con los datos proporcionados
   */
  async llenarFormulario(datos: {
    nombres: string;
    cedula: string;
    telefono: string;
    correo: string;
  }) {
    await this.inputNombres.fill(datos.nombres);
    await this.inputCedula.fill(datos.cedula);
    await this.inputTelefono.fill(datos.telefono);
    await this.inputCorreo.fill(datos.correo);
  }

  /**
   * Aceptar la autorización de uso de datos
   */
  async aceptarAutorizacion() {
    await this.checkboxAutorizacion.check();
  }

  /**
   * Completar todo el formulario de contacto
   */
  async completarFormulario(datos: {
    nombres: string;
    cedula: string;
    telefono: string;
    correo: string;
  }) {
    await this.llenarFormulario(datos);
    await this.aceptarAutorizacion();
  }

  /**
   * Verificar si el checkbox de autorización está marcado
   */
  async estaAutorizacionMarcada(): Promise<boolean> {
    return await this.checkboxAutorizacion.isChecked();
  }
}
