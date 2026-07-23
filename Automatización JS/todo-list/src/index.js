import {ToDo} from "./ToDo.js";
import {Project} from "./Project.js";

function saveProjects(projects) {
    let projectsString = JSON.stringify(projects);
    localStorage.setItem("listas", projectsString);
}

function loadProjects() {
    const projectsString = localStorage.getItem("listas");
    if (!projectsString) {
        return [];
    }

    const rawProjects = JSON.parse(projectsString);

    return rawProjects.map(rawProject => {
        const project = Object.assign(new Project(), rawProject);
        project.collection = rawProject.collection.map(rawTask => Object.assign(new ToDo(), rawTask));
        return project;
    });
}

let list1 = new Project("Comprar");
list1.addTask("pan", "integral", "hoy", "alta", false);
list1.addTask("leche", "entera", "mañana", "media", false);
list1.addTask("huevos", "camperos", "hoy", "alta", false);
list1.addTask("fruta", "manzanas", "lunes", "baja", false);
const verdura = list1.addTask("verdura", "lechuga", "martes", "media", false);

let list2 = new Project("Maleta");
list2.addTask("vestidos", "cortos", "jueves", "alta", false);
list2.addTask("bañadores", "cuatro", "viernes", "alta", false);
list2.addTask("neceser", "cosas de baño", "jueves", "media", false);

let projects = [];
projects.push(list1, list2);
saveProjects(projects);

const proyectosCargados = loadProjects();
console.log(proyectosCargados);
console.log(proyectosCargados[0].listTitles()); // "Comprar"
console.log(proyectosCargados[0].collection[0].getList()); // "pan"

document.body.textContent = proyectosCargados.map(p => p.listTitles()).join(" | ");