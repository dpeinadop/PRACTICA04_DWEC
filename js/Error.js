/*
Manejo de errores personalizados
*/

//Excepción base para ir creando el resto de excepciones.
function BaseException() {
}
BaseException.prototype = new Error(); //Herencia del objeto Error.
BaseException.prototype.constructor = BaseException; //Definimos el constructor
//Sobrescribimos el método toString para personalizarlos
BaseException.prototype.toString = function(){
	// note that name and message are properties of Error
	return this.name + ": " + this.message;
};


//Excepción personalizada para indicar que el constructos no puede ser llamado como una función.
//Recibe como parámetro un valor
function NotConstructorException(value){
	this.name ="NotConstructorException";
	this.message = "Constructor can’t be called as a function!";
}

NotConstructorException.prototype = new BaseException(); //Heredamos de BaseException
NotConstructorException.prototype.constructor = NotConstructorException;

//Excepción personalizada para indicar que el valor introducido no es un objeto Person.
//Recibe como parámetro un valor
function NotObjectPersonException(value){
	this.name ="NotIsNatException";
	this.message = "El elemento no es un Object!";
}

NotObjectPersonException.prototype = new BaseException(); //Heredamos de BaseException
NotObjectPersonException.prototype.constructor = NotObjectPersonException;


//Excepción personalizada para indicar está llena.
//Recibe como parámetro un valor
function IsFullException(value){
	this.name ="IsFullException";
	this.message = "La lista está llena!";
}

IsFullException.prototype = new BaseException(); //Heredamos de BaseException
IsFullException.prototype.constructor = IsFullException;

//Excepción personalizada para indicar se encuentra fuera de rango.
//Recibe como parámetro un valor
function OutLimitException(value){
	this.name ="OutLimitException";
	this.message = "El índice está fuera de los límites de la lista!";
}

OutLimitException.prototype = new BaseException(); //Heredamos de BaseException
OutLimitException.prototype.constructor = OutLimitException;

//Excepción personalizada para indicar si está vacía.
//Recibe como parámetro un valor
function IsEmptyException(value){
	this.name ="IsEmptyException";
	this.message = "La lista está vacía!";
}

IsEmptyException.prototype = new BaseException(); //Heredamos de BaseException
IsEmptyException.prototype.constructor = IsEmptyException;


