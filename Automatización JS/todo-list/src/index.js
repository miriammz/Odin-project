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

let projects = loadProjects();

if(projects.length === 0) {
    const list1 = new Project("Comprar");
    list1.addTask("pan", "integral", "hoy", "alta", false);
    list1.addTask("leche", "entera", "mañana", "media", false);
    list1.addTask("huevos", "camperos", "hoy", "alta", false);
    list1.addTask("fruta", "manzanas", "lunes", "baja", false);
    list1.addTask("verdura", "lechuga", "martes", "media", false);

    const list2 = new Project("Maleta");
    list2.addTask("vestidos", "cortos", "jueves", "alta", false);
    list2.addTask("bañadores", "cuatro", "viernes", "alta", false);
    list2.addTask("neceser", "cosas de baño", "jueves", "media", false);

    projects.push(list1, list2);
    saveProjects(projects);
}

//console.log(projects);
//console.log(projects[0].listTitles()); // "Comprar"
//console.log(projects[0].collection[0].getList()); // "pan"

// Añadir "toalla" solo si no existe ya
const toallaExiste = projects[1].collection.some(task => task.title === "toalla");
if (!toallaExiste) {
    projects[1].addTask("toalla", "grande", "viernes", "media", false);
    saveProjects(projects);
}

// Eliminar "verdura" buscándola por título, no por índice fijo
const verdura = projects[0].collection.find(task => task.title === "verdura");
if (verdura) {
    projects[0].removeTask(verdura.id);
    saveProjects(projects);
}
document.body.textContent = projects.map(p => p.listTitles()).join(" | ");