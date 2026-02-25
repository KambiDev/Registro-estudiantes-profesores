export class GestorRegistro{
    #registro;

    constructor(){
        this.#registro = JSON.parse(localStorage.getItem("RegistroEstProf")) || [];
    }

    agregar(persona){
        const existe = this.#registro.some(p => p.id === persona.id)

        if (existe){
            alert("Esta persona ya esta registrada.");
            return;
        }

        this.#registro.push(persona);
        this.guardar();
    }

    get obtenerTodo(){
        return [...this.#registro];
    }

    eliminar(id){
        this.#registro = this.#registro.filter(p => p.id !== id);
        this.guardar();
    }

    guardar(){
        localStorage.setItem("RegistroEstProf", JSON.stringify(this.#registro));
    }
}