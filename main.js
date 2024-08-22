// Pregunta 1
// Hacer pregunta
let pregunta = prompt ("Eres bellisimo/a? (Resonde 'SI' o 'NO'").toLocaleUpperCase();

if (pregunta === "SI"){
    console.log("Ciertamente");
} else {
    console.log("No te creo");
}


// Pregunta 2
function divisible() {
    // Solicitar un numero al usuario
    const numero = parseInt(prompt ("Dame un numero"));
    
    // Verificar si el número es divisible entre 2
    if (numero % 2 === 0) {
        alert(`${numero} es divisible entre 2`);
    } else {
        alert(`${numero} no es divisible entre 2`);
    }
}
// Llamar a la funcion para iniciar el programa
divisible();


// Pregunta 3
function verificarPar() {
    // Solicitar un numero al usuario
    const numero = parseInt(prompt("Ingrese un número:"));

    // Verificar si el numero es par
    if (numero % 2 === 0) {
        alert(`${numero} es un numero par.`);
    } else {
        alert(`${numero} no es un numero par.`); 
    }
}

// Llamar a la funcion para iniciar el programa
verificarPar();


// Pregunta 4
function sorteo() {
    // Solicitar un numero al usuario
    const numeroCliente = parseInt(prompt("Ingrese su numero de Cliente:"));

    // Verificar si el numero es el ganador
    if (numeroCliente === 1000) {
        alert("Ganaste un premio!");
    } else {
        alert(`Lo sentimos, ${numeroCliente}. Sigue participando.`);
    }
}

// Llamar a la funcion para iniciar el sorteo
sorteo();


// Pregunta 5
function encontrarMenor() {
    // Solicitar los dos números al usuario
    const numero1 = parseInt(prompt("Ingrese el primer numero:"));
    const numero2 = parseInt(prompt("Ingrese el segundo numero:"));

    // Verificar cuál número es menor
    if (numero1 < numero2) {
        alert(`El numero menor es: ${numero1}`);
    } else {
    alert(`El numero menor es: ${numero2}`);
    }
}

// Llamar a la funcion para iniciar el programa
encontrarMenor();


// Pregunta 6
function encontrarMayor() {
    // Solicitar los tres numeros al usuario
    const numero1 = parseInt(prompt("Ingrese el primer numero:"));
    const numero2 = parseInt(prompt("Ingrese el segundo numero:"));
    const numero3 = parseInt(prompt("Ingrese el tercer numero:"));

    // Encontrar el numero mayor
    let mayor = numero1; // Inicializamos el mayor con el primer numero

    // Comparamos con el segundo numero
    if (numero2 > mayor) {
        mayor = numero2;
    }

    // Comparamos con el tercer numero
    if (numero3 > mayor) {
        mayor = numero3;
    }

    // Mostramos el resultado
    alert(`El numero mayor es: ${mayor}`);
}

// Llamamos a la función para ejecutar el programa
encontrarMayor();


// Pregunta 7
function diaDeLaSemana() {
    const dia = prompt("Ingrese un dia de la semana (lunes, martes, miercoles, jueves, viernes, sabado, domingo):");

    switch (dia.toLowerCase()) {
        case "lunes":
            alert("Es lunes! Comienza la semana.");
        break;
        case "viernes":
            alert("Es viernes! Casi llega el fin de semana!");
        break;
        case "sabado":
        case "domingo":
            alert("Es fin de semana! Disfruta!");
        break;
        default:
            alert("Dia invalido. Por favor, ingrese un dia de la semana valido.");
    }
}

diaDeLaSemana();


// Pregunta 8
function evaluarCalificacion() {
    // Solicitar la calificacion al usuario
    const calificacion = parseInt(prompt("Ingrese su calificacion (entre 1 y 10):"));

    // Validar si la calificacion esta dentro del rango
    if (calificacion >= 1 && calificacion <= 10) {
      // Evaluar la calificacion y mostrar el mensaje correspondiente
        if (calificacion < 6) {
            alert("Reprobado");
        } else if (calificacion >= 6 && calificacion <= 8) {
            alert("Regular");
        } else if (calificacion === 9) {
            alert("Bien");
        } else {
            alert("Excelente");

    }
    } else {
        // Mostrar mensaje de error si la calificacion no esta en el rango
        alert("Calificacion invalida. Ingrese un numero entre 1 y 10.");
    }
}

// Llamar a la funcion para ejecutar el programa
evaluarCalificacion();


// Pregunta 9
function calcularPrecioHelado() {
    const precioBaseHelado = 50; // Precio base del helado sin topping
    const precioToppingOreo = 10;
    const precioToppingKitKat = 15;
    const precioToppingBrownie = 20;

    // Pedir al usuario que elija el topping
    const topping = prompt("Elige tu topping: oreo, kitkat o brownie (o escribe 'ninguno' para helado sin topping)");

    let precioTotal = precioBaseHelado;

    switch (topping.toLowerCase()) {
        case "oreo":
            precioTotal += precioToppingOreo;
            break;
        case "kitkat":
            precioTotal += precioToppingKitKat;
            break;
        case "brownie":
            precioTotal += precioToppingBrownie;
            break;
        case "ninguno":
            break; // El precio ya está inicializado con el precio base
        default:
            console.log("No tenemos este topping, lo sentimos.");
    }

    if (topping.toLowerCase() !== "ninguno" && topping.toLowerCase() !== "oreo" && topping.toLowerCase() !== "kitkat" && topping.toLowerCase() !== "brownie") {
        console.log("El precio del helado sin topping es de $" + precioBaseHelado + " MXN.");
    } else {
        console.log("El precio total de tu helado es de $" + precioTotal + " MXN.");
    }
}

calcularPrecioHelado();


// Pregunta 10
function calcularCostoPrograma() {
    // Precios base de los programas
    const precioCourse = 4999;
    const precioCarrera = 3999;
    const precioMaster = 2999;

    // Duracion de los programas en meses
    const duracionCourse = 2;
    const duracionCarrera = 6;
    const duracionMaster = 12;

    // Descuentos por beca
    const descuentoFacebook = 0.2;
    const descuentoGoogle = 0.15;
    const descuentoJesua = 0.5;

    // Preguntar al usuario la opcion elegida
    const programa = prompt("Elija el programa: Course, Carrera o Master");

    // Preguntar si cuenta con alguna beca
    const beca = prompt("Cuenta con alguna beca? (Facebook, Google, Jesua o ninguna)");

    // Inicializar el precio mensual y total
    let precioMensual = 0;
    let precioTotal = 0;

    // Calcular el precio segun el programa elegido
    switch (programa.toLowerCase()) {
        case "course":
            precioMensual = precioCourse;
            precioTotal = precioMensual * duracionCourse;
            break;
        case "carrera":
            precioMensual = precioCarrera;
            precioTotal = precioMensual * duracionCarrera;
            break;
        case "master":
            precioMensual = precioMaster;
            precioTotal = precioMensual * duracionMaster;
            break;
        default:
            console.log("Opcion invalida.");
            return;
    }

    // Aplicar descuento si corresponde
    switch (beca.toLowerCase()) {
        case "facebook":
            precioMensual *= (1 - descuentoFacebook);
            precioTotal *= (1 - descuentoFacebook);
            break;
        case "google":
            precioMensual *= (1 - descuentoGoogle);
            precioTotal *= (1 - descuentoGoogle);
            break;
        case "jesua":
            precioMensual *= (1 - descuentoJesua);
            precioTotal *= (1 - descuentoJesua);
            break;
    }

    // Mostrar el resultado al usuario
    console.log("El costo mensual del programa es de $" + precioMensual.toFixed(2) + " MXN.");
    console.log("El costo total del programa es de $" + precioTotal.toFixed(2) + " MXN.");
}

calcularCostoPrograma();


// Pregunta 11
function calcularCostoViaje() {
    // Obtener los datos del usuario
    const tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto o autobus):").toLowerCase();
    const kmsRecorridos = parseFloat(prompt("Ingrese los kilometros recorridos:"));
    const litrosConsumidos = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));

    // Establecer los precios por kilometro segun el tipo de vehiculo
    let precioPorKm = 0;
    switch (tipoVehiculo) {
        case "coche":
            precioPorKm = 0.20;
            break;
        case "moto":
            precioPorKm = 0.10;
            break;
        case "autobus":
            precioPorKm = 0.50;
            break;
        default:
            console.log("Tipo de vehiculo invalido.");
            return;
    }

    // Calcular el costo base del viaje
    const costoBase = precioPorKm * kmsRecorridos;

    // Calcular el cargo extra por litros consumidos
    let cargoExtra = 0;
    if (litrosConsumidos > 100) {
        cargoExtra = 10;
    } else if (litrosConsumidos > 0) {
        cargoExtra = 5;
    }

    // Calcular el costo total
    const costoTotal = costoBase + cargoExtra;

    // Mostrar el resultado
    console.log("El costo total del viaje es de $" + costoTotal + ".");
}

calcularCostoViaje();