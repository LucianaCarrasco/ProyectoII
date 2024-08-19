window.addEventListener("load", inicio, true);

function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function() {
        this.value = this.value.toUpperCase();
    }, true);
    document.getElementById("cifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrar2(texto, desplazamiento);
    }, true);

    document.getElementById("descifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
    }, true);
}

function cifrar(texto, desplazamiento) {
    let resultado = "";
    let alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
    // Aseguramos que el desplazamiento esté dentro del rango correcto
    desplazamiento = (parseInt(desplazamiento) % alfabeto.length + alfabeto.length) % alfabeto.length;
    desplazamiento = (desplazamiento % 37 + 37) % 37;
    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            let caracter = texto[i].toUpperCase(); // Convertimos a mayúscula para simplificar
            let posicion = alfabeto.indexOf(caracter);

            if (posicion !== -1) {
                posicion = (posicion + desplazamiento) % 37;
                resultado += alfabeto[posicion];
            } else {
                resultado += caracter; // Si no está en el alfabeto, lo dejamos igual
            }
        }
    }
    return resultado;
}

function cifrar2(texto, desplazamiento) {
    if (!texto) return "";

    const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
    // Aseguramos que el desplazamiento esté dentro del rango correcto
    desplazamiento = (parseInt(desplazamiento) % alfabeto.length + alfabeto.length) % alfabeto.length;
    desplazamiento = (desplazamiento % 37 + 37) % 37;
    return texto.replace(/[AABCDEFGHIJKLMNÑOPQRSTUVWXYZ0-9]/gi, c => {
        const indice = alfabeto.indexOf(c.toUpperCase()); // Convertimos a mayúscula para buscar
        return alfabeto[(indice + desplazamiento) % 37];
    });
}

function descifrar(texto, desplazamiento) {
    if (!texto) return "";
    // Aseguramos que el desplazamiento esté dentro del rango correcto
    desplazamiento = (parseInt(desplazamiento) % alfabeto.length + alfabeto.length) % alfabeto.length;
    const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
    desplazamiento = (desplazamiento % 37 - 37) % 37;
    return texto.replace(/[AABCDEFGHIJKLMNÑOPQRSTUVWXYZ0-9]/gi, c => {
        const indice = alfabeto.indexOf(c.toUpperCase());
        return alfabeto[(indice - desplazamiento) % 37];
    });
}


/* no eliminar esto
function cifrar(texto, desplazamiento) {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;
    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            if (letras.indexOf(texto[i]) != -1) {

                let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26);

                resultado += letras[posicion];
            } else {
                resultado += texto[i];
            }
        }
    }
    return resultado;

}

*/


/*
function cifrar2(texto, desplazamiento) {
    if (!texto)
        return "";

    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 36 + 36) % 36;
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 36])
  
}

function descifrar(texto, desplazamiento) {
    if (!texto)
        return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento + 26) % 26]);
}

*/

function copyText() {
    // Selecciona 
    const mensaje2 = document.getElementById("mensaje2");
    mensaje2.select();
    mensaje2.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el contenido al portapapeles
    document.execCommand("copy");

    // Mensaje de confirmación
    alert("Texto copiado al portapapeles.");
}