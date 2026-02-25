import "./css/styles.css";
import { Estudiante } from "./js/estudiante.js";
import { Profesor } from "./js/profesor.js";
import { GestorRegistro } from "./js/gestorRegistro.js";
import { render } from "./js/ui.js";

const mainContent = document.querySelector(".main-content");
const containerEstudiante = document.querySelector(".container-estudiante");
const containerProfesor = document.querySelector(".container-profesor");
const btnRegistrar = document.querySelector(".btn-registrar");
const dialog = document.querySelector("dialog");
const btnAgregar = document.querySelector(".btn-agregar");
const btnCancelar = document.querySelector(".btn-cancelar");

const gestor = new GestorRegistro();

btnRegistrar.addEventListener("click", () => dialog.showModal());

btnAgregar.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const edad = document.querySelector("#edad").value;
    const rol = document.querySelector("#rol").value;

    let persona;

    if (rol === "estudiante"){
        persona = new Estudiante(nombre, edad);
        gestor.agregar(persona);
        containerEstudiante.appendChild(render(persona));
    }else{
        persona = new Profesor(nombre, edad);
        gestor.agregar(persona);
        containerProfesor.appendChild(render(persona));
    }

    dialog.close();
});

btnCancelar.addEventListener("click", () => dialog.close());

mainContent.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete")){

        const id = e.target.getAttribute("data-id");
        gestor.eliminar(id);

        const tarjeta = e.target.closest(".card-registro");
        if (tarjeta){
            tarjeta.remove();
        }
    }
});