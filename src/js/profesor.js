import { Persona } from "./persona.js";

export class Profesor extends Persona{
    constructor(nombre, edad){
        super(nombre, edad);
        this.rol = "profesor";
    }
}