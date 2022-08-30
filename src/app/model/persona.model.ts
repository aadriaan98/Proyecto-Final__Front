export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    edad: String;

    constructor(nombre: String,apellido: String, edad: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}