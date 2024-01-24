// app.js

function realizarAccion(accion) {
    const textoOriginal = document.getElementById('textarea').value;
    let resultado;
  
    if (accion === 'encriptar') {
      resultado = encriptar(textoOriginal);
    } else {
      resultado = desencriptar(textoOriginal);
    }
  
    document.getElementById('texto-resultado').textContent = resultado;
  }
  
  function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
  }
  
  function desencriptar(texto) {
    return texto.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
  }
  
  function copiarResultado() {
    const resultado = document.getElementById('texto-resultado');
    const textoCopiado = resultado.textContent;
  
    const textarea = document.createElement('textarea');
    textarea.value = textoCopiado;
    document.body.appendChild(textarea);
  
    textarea.select();
    document.execCommand('copy');
    
    document.body.removeChild(textarea);
    alert('Texto copiado al portapapeles');
  }
  