// Genera un correo aleatorio para tests
export function generarCorreoAleatorio(): string {
  const timestamp = Date.now();
  const aleatorio = Math.floor(Math.random() * 10000);
  return `test_${timestamp}_${aleatorio}@example.com`;
}

// Genera una cédula de 10 dígitos (no valida algoritmo)
export function generarCedula(): string {
  let cedula = '';
  for (let i = 0; i < 10; i++) {
    cedula += Math.floor(Math.random() * 10).toString();
  }
  return cedula;
}

// Genera nombre para capturas con timestamp
export function generarNombreCaptura(nombreTest: string, fase: string): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  return `${nombreTest}_${fase}_${timestamp}.png`;
}

export function obtenerTimestamp(): string {
  return new Date().toISOString();
}
