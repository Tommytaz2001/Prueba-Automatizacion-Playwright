export const configuracion = {
  // URLs Base
  urlBase: process.env.BASE_URL || 'http://localhost:3000',
  urlXtrim: 'https://www.xtrim.com.ec',
  
  // Timeouts
  tiempos: {
    porDefecto: 30000,
    navegacion: 60000,
    accion: 10000,
  },
  
  // Datos de prueba para formulario de contacto
  datosFormularioContacto: {
    nombres: 'Juan Carlos Pérez',
    cedula: '1234567890',
    telefono: '0987654321',
    correo: 'juan.perez@test.com',
  },
  
  // Configuración del navegador
  navegador: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: parseInt(process.env.SLOW_MO || '0'),
  },
  
  // Capturas de pantalla
  capturas: {
    alFallar: true,
    ruta: './test-results/screenshots',
  },
};
