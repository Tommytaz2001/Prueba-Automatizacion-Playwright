import { Page, Locator } from '@playwright/test';
import { BasePage } from './base_page';

// Formulario de contacto
export class PaginaFormularioContacto extends BasePage {
  readonly inputNombres: Locator;
  readonly inputCedula: Locator;
  readonly inputTelefono: Locator;
  readonly inputCorreo: Locator;
  readonly checkboxAutorizacion: Locator;

  constructor(page: Page) {
    super(page);
    
    this.inputNombres = page.getByRole('textbox', { name: 'Nombres' });
    this.inputCedula = page.getByRole('textbox', { name: 'Cédula' });
    this.inputTelefono = page.getByRole('textbox', { name: 'Teléfono' });
    this.inputCorreo = page.getByRole('textbox', { name: 'Correo electrónico' });
    this.checkboxAutorizacion = page.getByRole('checkbox', { name: 'Al dar clic, autorizas el uso' });
  }

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

  async aceptarAutorizacion() {
    await this.checkboxAutorizacion.check();
  }

  // Llena todo el formulario y acepta la autorización
  async completarFormulario(datos: {
    nombres: string;
    cedula: string;
    telefono: string;
    correo: string;
  }) {
    await this.llenarFormulario(datos);
    await this.aceptarAutorizacion();
  }

  async estaAutorizacionMarcada(): Promise<boolean> {
    return await this.checkboxAutorizacion.isChecked();
  }
}
