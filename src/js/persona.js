export class Persona{
    #id;

    constructor(nombre, edad){
        this.#id = crypto.randomUUID(); 
        this.nombre = nombre;
        this.edad = edad;
    }

    get id(){
        return this.#id;
    }

    toJSON(){
        return {
            id: this.#id,
            nombre: this.nombre,
            edad: this.edad,
            rol: this.rol
        };
    }
}