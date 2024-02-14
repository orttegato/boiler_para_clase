import { tareas } from '../assets/data/tareas.js';

window.onload = () => {
    let lista = document.querySelector("#lista");

    tareas.forEach((tarea) => {
        let elem = `
            <li class="lista_elemento" id="${tarea.id}">
                <p>${tarea.titulo}</p>
                <button class="btn_cerrar">X</button>
            </li>
        `;

        lista.innerHTML += elem;
    });

    // Obtener todos los botones de cerrar
    let botonesCerrar = document.querySelectorAll(".btn_cerrar");

    // Agregar un event listener a cada botón de cerrar
    botonesCerrar.forEach((boton) => {
        boton.addEventListener("click", () => {
            // Obtener el elemento padre del botón (el <li> correspondiente)
            let elementoPadre = boton.parentElement;
            
            // Eliminar el elemento padre de la lista
            elementoPadre.remove();
        });
    });
}
