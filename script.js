/* Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido.
Debe imprimir el resultado por el DOM de un archivo index.html que debes crear en el mismo directorio de tu proyecto.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato. */


// Pedir que se ingrese un número
function solicitarNumero() {
    let numero = prompt("Ingresa un número para calcular su factorial:");
    
    while (isNaN(numero) || numero === "" || numero === null) {
        alert("Error: Ingresa un número válido.");
        numero = prompt("Por favor, ingresa un número para calcular su factorial:");
    }
    
    return parseInt(numero);
}


// Calcular el factorial del número
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}


// Mostrar el resultado por html
function mostrarResultado(numero, factorial) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `El factorial de ${numero} es ${factorial}.`;
}

// Función principal
function main() {
    const numero = solicitarNumero();
    const factorial = calcularFactorial(numero);
    mostrarResultado(numero, factorial);
}

// Ejecutar la función principal
main();