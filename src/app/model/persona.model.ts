export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    dni: String;
    
    constructor(nombre: String, apellido: String, dni: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}
