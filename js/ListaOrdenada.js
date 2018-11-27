"use strict";





// LA CREACION EN ESTE CASO SERÍA IGUAL?
function Lista(tamMax){
    if (!(this instanceof Lista)) //Este condicional evita que se invoque el constructor como una función normal.
         throw new NotConstructorException();
     if(this.tamMax < 1){
         tanMax = Lista.tamanioMaximo;
     }
     this.elementos = []; // array donde se almacenarán los diferentes objetos Person
     this.tamMax = tamMax; // Nos dará el tamaño máximo que podrá tener nuestra lista
 }
 
 // funcion static para el tamanio maximo
Lista.tamanioMaximo = function (){
    return 5;
}

//Comprueba que el índice introducido no esté fuera de rango de elementos ocupados 
Lista.prototype.fueraRango = function (posicion) {
    return (posicion > (this.elementos.length - 1) || posicion < 0);
}

//Devuelve true o false en función de si la lista está vacía
Lista.prototype.isEmpty = function () {
    return (this.elementos.length == 0);
}

//Devuelve true o false en función de si la lista está llena
Lista.prototype.isFull = function () {
    return (this.elementos.length == this.tamMax);
}

//Devuelve el número de elementos de la lista.
Lista.prototype.size = function () {
    return this.elementos.length;
}




function comparar(personA, personB){
	var orden;
	if( personA.compareSurname(personB.getSurname()) == 0){
		if(personA.compareName(personB.getName()) == 0){
			orden = 1;
		}else if (personA.compareName(personB.getName()) == 1){
			orden = -1;
		}else if (personA.compareName(personB.getName()) == -1){
		orden = 1;
		}
	}else if (personA.compareSurname(personB.getSurname()) == 1){
		orden = -1;
	}else if (personA.compareSurname(personB.getSurname()) == -1){
		orden = 1;
	}
	return orden;
}

function compararSurName(personA, personB){
	return personA.compareSurname(personB.getSurname());
}
function compararName(personA, personB){
	return personA.compareName(personB.getName());
}



//Añade un nuevo elemento al final de la lista. Devuelve el tamaño de la lista una vez añadido.
Lista.prototype.add = function (objetoPerson) {
   	if (!(objetoPerson instanceof Person)) {
		//lanzar excepción no es un objet Person
		throw new NotObjectPersonException ();
    }
    if (this.isFull()) {
    	throw  new IsFullException ();
    }
	if (this.elementos.length == 0){
		this.elementos[0] = objetoPerson;
	}else{
		var posicion = -1;
		do{
			posicion++;
		}while(posicion < this.size){
			if(comparar(this.elementos[posicion], objetoPerson) == -1 ){
				this.elementos.splice(posicion, 0, objetoPerson);
			}else if (comparar(this.elementos[posicion], objetoPerson) == 1 ) {
				this.elementos.splice(posicion+1, 0, objetoPerson);
			}
		}
	}
	return this.elementos.length;
}

//Devuelve el elemento de la lista de la posición indicada.
Lista.prototype.get = function (posicion) {
	var retorno = null;
    if (isNaN(posicion)) {
		throw new isNaNException ();
    }
    if (posicion >= this.size() || posicion < 0) {
		//lanzar excepción fuera límites
		throw new OutLimitException ();
	} else {
		retorno = this.elementos[posicion].getName() + " " +this.elementos[posicion].getSurname();
	}
	return retorno;
}

//Devuelve la lista en formato cadena. El delimitador de elementos será “-“.
Lista.prototype.toString = function() {
    var texto = "";
    if (!this.isEmpty()) {
        var length_1 = this.elementos.length - 1;
        for (var i = 0; i < length_1; i++) {
            texto = texto +  this.elementos[i].getName()  + " " + this.elementos[i].getSurname() + " - ";
        }
        texto = texto +  this.elementos[i].getName()  + " " + this.elementos[i].getSurname();
    }
    return texto;
}



//Devuelve la posición del elemento indicado. Si el elemento no está en la lista devuelve -1.
Lista.prototype.indexOf = function (objetoPerson) {
    if (!(objetoPerson instanceof Person)) {
		//lanzar excepción no es un objet Person
		throw new NotObjectPersonException ();
    }
    return this.elementos.indexOf(objetoPerson);
}


//Devuelve el máximo número de elementos que podemos tener en la lista.
Lista.prototype.capacity = function () {
    return this.tamMax;
}

//Vacía la lista
Lista.prototype.clear = function () {
	this.elementos.splice(0, (this.tamMax));
}

//Devuelve el primer elemento de la lista
Lista.prototype.firstElement = function() {
    if (this.isEmpty()) {
    	throw  new IsEmptyException ();
    }
    return  this.elementos[0].getName()  + " " + this.elementos[0].getSurname();
}

//Devuelve el último elemento de la lista
Lista.prototype.lastElement = function () {
    if (this.isEmpty()) {
    	throw  new IsEmptyException ();
    }
    return this.elementos[this.elementos.length - 1].getName() + " " + this.elementos[this.elementos.length - 1].getSurname();;
}

//Elimina el elemento de la posición indicada. Devuelve el elemento borrado
Lista.prototype.remove = function (posicion) {
    var elementoBorrado;
    if (isNaN(posicion)) {
		throw new isNaNException ();
    }
    if (this.fueraRango( posicion)) {
        throw new OutLimitException ();
    }else {
        elementoBorrado = (this.elementos.splice(posicion, 1));
    } 
    return elementoBorrado[posicion].getName() + elementoBorrado[posicion].getSurname();
}




//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso contrario
Lista.prototype.removeElement = function (objetoPerson) {
    var borrado = false;
    var posicion;
    if (!(objetoPerson instanceof Person)) {
		//lanzar excepción no es un objet Person
		throw new NotObjectPersonException ();
    }
    posicion = this.indexOf(objetoPerson);
    if (posicion > -1){
    	this.elementos.splice(posicion, 1);
    	borrado = true;
    }
    return borrado;
}

//Elimina el último elemento de la lista. Salta una excepción cuando la lista se encuentra vacía.
Lista.prototype.poll = function (){
    if (this.isEmpty()){ 		
        throw  new IsEmptyException ();
    }
    return this.elementos.pop(); 
}  




function testlista() {
	try {
		var lis1 = new Lista(5);
		var p1 = new Person("David", "Peinado");
		var p2 = new Person("Luis", "Peinado");
		var p3 = new Person("Angela", "Arteta");
		var p4 = new Person("Rafael", "Alhambra");
		var p5 = new Person("Felipe", "Diaz");
		var p6 = new Person("Gemma", "Gacía");
		
		console.log("-- Lista.add ---");
		console.log("lis1.add('David', 'Peinado'): " + lis1.add(p1));
		console.log("lis1.add('Luis', 'Peinado'): " + lis1.add(p2));
		console.log("lis1.toString: " + lis1.toString());
		console.log("lis1.add('Angela', 'Arteta'): " + lis1.add(p3));
		console.log("lis1.toString: " + lis1.toString());
		console.log("lis1.add('Rafael', 'Alhambra'): " + lis1.add(p4));
		console.log("lis1.toString: " + lis1.toString());
		console.log("lis1.add('Felipe', 'Diaz'): " + lis1.add(p5));
		console.log("lis1.toString:" + lis1.toString());
		
		console.log("__________________");
		console.log("lis1.toString: " + lis1.toString());
		try {
			console.log("lis1.add(('Gemma', 'Gacía'): " + lis1.add(p6));
		} catch (err) {
			console.log("lis1.add('Gemma', 'Gacía'): Exception -> " + err);
		}
		try {
			console.log("lis1.add(150): " + lis1.add(150));
		} catch (err) {
			console.log("lis1.add(150): Exception -> " + err);
		}
		console.log("---------------------------");

		console.log("--  Lista.remore y Lista.removeElement ---");
		console.log("lis1.remove(0): " + lis1.remove(0));
		try {
			console.log("lis1.remove(15): " + lis1.remove(15));
		} catch (err) {
			console.log("lis1.remove(15): Exception -> " + err);
		}
		console.log("lis1.removeElement(p2): " + lis1.removeElement(p2));
		try {
			console.log("lis1.removeElement('asd'): " + lis1.removeElement('asd'));
		} catch (err) {
			console.log("lis1.removeElement('asd'): Exception -> " + err);
		}
		console.log("lis1.toString: " + lis1.toString());
		console.log("---------------------------");

		console.log("-- Lista.get, Lista.indexOf ---");
		console.log("lis1.get(2): " + lis1.get(2));
		try {
			console.log("lis1.get(7): " + lis1.get(7));
		} catch (err) {
			console.log("lis1.get(7): Exception -> " + err);
		}
		try {
			console.log("lis1.get('hola'): " + lis1.get('hola'));
		} catch (err) {
			console.log("lis1.get('hola'): Exception -> " + err);
		}
		console.log("lis1.toString: " + lis1.toString());
		console.log("lis1.indexOf(p2): " + lis1.indexOf(p2));
		try {
			console.log("lis1.indexOf('hola'): " + lis1.indexOf('hola'));
		} catch (err) {
			console.log("lis1.indexOf('hola'): Exception -> " + err);
		}
		console.log("---------------------------");

		console.log("-- Lista.size, Lista.capacity, Lista.lastElement, Lista.firstElement ---");
		console.log("lis1.add(p3): " + lis1.add(p3));
		console.log("lis1.toString: " + lis1.toString());
		console.log("lis1.size(): " + lis1.size());
		console.log("lis1.capacity(): " + lis1.capacity());
		console.log("lis1.lastElement(): " + lis1.lastElement());
		console.log("lis1.firstElement(): " + lis1.firstElement());
		console.log("lis1.clear(): " + lis1.clear());
		try {
			console.log("lis1.lastElement(): " + lis1.lastElement());
		} catch (err) {
			console.log("lis1.lastElement(): Exception -> " + err);
		}
		try {
			console.log("lis1.firstElement(): " + lis1.firstElement());
		} catch (err) {
			console.log("lis1.firstElement(): Exception -> " + err);
		}
		console.log("lis1.toString(): " + lis1.toString());
	} catch (err) {
		console.log(err);
	}
}
window.onload = testlista;