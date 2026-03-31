// Ejercicio 1
function comprobarPresupuesto(dinero) {
    let resultado
    if (dinero > 69999) {
        resultado = dinero * 0.85;
        return `Total a pagar: $${resultado} `
    } else {
        resultado = dinero * 0.95
        return `Total a pagar: $${resultado}`
    }
}

function ejercicio_1() {
    let input = document.getElementById("input1");
    const result = document.getElementById("resultado1");
    const container = document.getElementById("resultadoContainer1");
    let dinero = parseInt(input.value);
    if (isNaN(dinero)) {
        alert("Ingresa valores válidos.");
    } else {
        let resultado = comprobarPresupuesto(dinero);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none")
        opciones = [];
    }
}

//Ejercicio 2

let asistencia = ["Jose", "Carlos", "Matias", "Martin", "Akon", "Arael"];
// Boton Normal
function agregarLista(nombre) {
    asistencia.push(nombre);
    return asistencia.join(", ");
}

function ejercicio_2_1() {
    const container = document.getElementById("resultadoContainer2");
    const result = document.getElementById("resultado2");
    const input = document.getElementById("input2");
    let nombre = input.value;
    let resultado = agregarLista(nombre);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

// Boton Urgencia

function agregarUrgencia(nombre) {
    asistencia.unshift(nombre);
    return asistencia.join(", ");
}

function ejercicio_2_2() {
    const container = document.getElementById("resultadoContainer2");
    const result = document.getElementById("resultado2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("No puede estar vacío");
    };
}

// ejercicio 3

let nombre3 = ["Martin", "Matias", "Arael", "Sergio", "Mauricio", "Danny Hernandez"];
let rut = ["227773346", "337842934", "102349983", "777458785", "23874599", "228278547"]
function buscarDato(dato) {
    let mensaje = "";
    for (let i = 0; i < rut.length && i < nombre3.length; i++) {
        if (dato == rut[i]) {
            mensaje = "Beneficiario Verificado"
            return "Beneficiario Verificado"
        } else if (dato == nombre3[i]) {
            mensaje = "Beneficiario Verificado"
            return "Beneficiario Verificado"
        } else {
            mensaje = ("No registrado")
        }
    }
    return mensaje;
}

function ejercicio_3() {
    let input = document.getElementById("input3");
    let dato = input.value;
    const result = document.getElementById("resultado3");
    const container = document.getElementById("resultadoContainer3");
    let resultado = buscarDato(dato);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}
