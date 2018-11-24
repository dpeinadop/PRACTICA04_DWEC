// FUNCIONES DEPENDIENTE DE LA PÁGINA



//Creamos un variable que nos irá rellenando el array
var lis1 = new Lista(5);

// Esta función nos limpia input del formulario.
function limpiarDatos() {
    document.getElementById("numero").value = "";
}

//Función para añadir elementos al array
function aniadir(Persona) {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    if(nombre != '' && apellido != ''){
        person = new Person (nombre, apellido);
    }
    error.innerHTML = "";
    try {
        lis1.add(person);
        lista.innerHTML = lis1.toString();
    } catch (err) {
        error.innerHTML = err;
    }
}

// Función que borra los elementos del array
function borrar() {
    var error = document.getElementById("error");
    var lista = document.getElementById("lista");
    error.innerHTML = "";
    try {
        lis1.poll();
        lista.innerHTML =lis1.toString();
    } catch (err) {
        error.innerHTML = err;
    }
}