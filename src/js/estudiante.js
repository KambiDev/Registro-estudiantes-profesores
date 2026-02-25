import { Persona } from "./persona.js";

export class Estudiante extends Persona{
    constructor(nombre, edad){
        super(nombre, edad);
        this.rol = "estudiante";
    }
}