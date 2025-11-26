/**
 * Funciones de utilidad para los tests
 */

/**
 * Generar un correo electrónico aleatorio
 */
export function generarCorreoAleatorio(): string {
  const timestamp = Date.now();
  const aleatorio = Math.floor(Math.random() * 10000);
  return `test_${timestamp}_${aleatorio}@example.com`;
}

/**
 * Generar un número de cédula ecuatoriana (10 dígitos)
 * Nota: Genera un número aleatorio de 10 dígitos, no valida el algoritmo de verificación
 */
export function generarCedula(): string {
  let cedula = '';
  for (let i = 0; i < 10; i++) {
    cedula += Math.floor(Math.random() * 10).toString();
  }
  return cedula;
}

/**
 * Generar nombre de archivo para captura de pantalla con timestamp
 */
export function generarNombreCaptura(nombreTest: string, fase: string): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  return `${nombreTest}_${fase}_${timestamp}.png`;
}

/**
 * Obtener timestamp actual
 */
export function obtenerTimestamp(): string {
  return new Date().toISOString();
}
