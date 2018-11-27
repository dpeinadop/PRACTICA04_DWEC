/* Realiza la misma implementación de la tarea de la unidad 03 pero utilizando objetos. 
En lugar de trabajar con number como en ocasiones anteriores, deberás almacenar en la 
listas un objeto "Person", que tendrá como propiedades "name" y "surname" con el nombre
 y el apellido respectivamente. La relación de orden será el orden alfabético del apellido,
seguido del nombre en el caso de que tengan el mismo apellido.
Deberás realizar una gestión de errores utilizando objetos también.
En esta ocasión implementa solamente el ejercicio utilizando las facilidades de los array.*/

function Person (nameIn, surnameIn){
	this.name = nameIn;
	this.surname = surnameIn;
}

// setter y getter para las propiedades de Person

Person.prototype.setName = function(nameIn){
	this.name = nameIn;
}

Person.prototype.getName = function () {
	return this.name;
}

Person.prototype.setSurname = function (surnameIn){
	this.surname = surnameIn;
}

Person.prototype.getSurname = function () {
	return this.surname;
}

Person.prototype.compareName = function (nameIn){
	return  this.name.localeCompare(nameIn);
}

Person.prototype.compareSurname = function (surnameIn){
	return this.surname.localeCompare(surnameIn);
}





