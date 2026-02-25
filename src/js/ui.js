export function render(persona){

    const div = document.createElement("div");
    div.classList.add("card-registro");

    const h3 = document.createElement("h3");
    h3.textContent = "Usuario";

    const small = document.createElement("small");
    small.classList.add("id-text");
    small.textContent = `${persona.id}`;

    const div2 = document.createElement("div");
    div2.classList.add("container-info");

    const p1 = document.createElement("p");
    p1.textContent = `${persona.nombre}`;
    const p2 = document.createElement("p");
    p2.textContent = `${persona.rol}`;
    const p3 = document.createElement("p");
    p3.textContent = `${persona.edad}`;

    const boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.classList.add("delete");
    boton.dataset.id = persona.id;

    div2.append(p1, p2, p3);
    div.append(h3, small, div2, boton);

    return div;

}