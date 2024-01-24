// Función principal para realizar la acción de encriptar o desencriptar según el parámetro proporcionado.
function realizarAccion(accion) {
  // Obtener el texto original del elemento con el id 'textarea'.
  const textoOriginal = document.getElementById('textarea').value;
  let resultado;

  // Determinar la acción a realizar: encriptar o desencriptar.
  if (accion === 'encriptar') {
      resultado = encriptar(textoOriginal);
  } else {
      resultado = desencriptar(textoOriginal);
  }

  // Establecer el contenido del elemento con el id 'texto-resultado' con el resultado obtenido.
  document.getElementById('texto-resultado').textContent = resultado;
}

// Función para encriptar el texto reemplazando algunas vocales con palabras específicas.
function encriptar(texto) {
  return texto.replace(/e/g, 'enter')
             .replace(/i/g, 'imes')
             .replace(/a/g, 'ai')
             .replace(/o/g, 'ober')
             .replace(/u/g, 'ufat');
}

// Función para desencriptar el texto, realizando el proceso inverso de la función encriptar.
function desencriptar(texto) {
  return texto.replace(/enter/g, 'e')
             .replace(/imes/g, 'i')
             .replace(/ai/g, 'a')
             .replace(/ober/g, 'o')
             .replace(/ufat/g, 'u');
}

// Función para copiar el resultado al portapapeles.
function copiarResultado() {
  // Obtener el elemento con el id 'texto-resultado'.
  const resultado = document.getElementById('texto-resultado');
  // Obtener el texto del elemento.
  const textoCopiado = resultado.textContent;

  // Crear un nuevo elemento de textarea y establecer su valor como el texto copiado.
  const textarea = document.createElement('textarea');
  textarea.value = textoCopiado;
  // Agregar el textarea al cuerpo del documento.
  document.body.appendChild(textarea);

  // Seleccionar todo el texto en el textarea.
  textarea.select();
  // Ejecutar el comando para copiar al portapapeles.
  document.execCommand('copy');
  
  // Eliminar el textarea del cuerpo del documento.
  document.body.removeChild(textarea);
  // Mostrar una alerta indicando que el texto se ha copiado al portapapeles.
  alert('Texto copiado al portapapeles');
}
