export const configuracion = {
  urlBase: process.env.BASE_URL || 'http://localhost:3000',
  urlXtrim: 'https://www.xtrim.com.ec',
  
  tiempos: {
    porDefecto: 30000,
    navegacion: 60000,
    accion: 10000,
  },
  
  datosFormularioContacto: {
    nombres: 'Juan Carlos Pérez',
    cedula: '1234567890',
    telefono: '0987654321',
    correo: 'juan.perez@test.com',
  },
  
  navegador: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: parseInt(process.env.SLOW_MO || '0'),
  },
  
  capturas: {
    alFallar: true,
    ruta: './test-results/screenshots',
  },
};
