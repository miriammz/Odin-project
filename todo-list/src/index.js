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

function deleteProject(projects, id) {
    return projects.filter(project => project.id !== id);
}

function renameProject(projects, id, newName) {
    const project = projects.find(task => task.id === id);
    if (project) {
        project.name = newName;
    }
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

// Añadir "toalla" solo si no existe ya
const toallaExiste = projects[1].collection.some(task => task.title === "toalla");
if (!toallaExiste) {
    projects[1].addTask("toalla", "grande", "viernes", "media", false);
    saveProjects(projects);
}

// Eliminar "verdura" buscándola por título, no por índice fijo
const comprar = projects.find(p => p.name === "Comprar");
if (comprar) {
    const verdura = projects[0].collection.find(task => task.title === "verdura");
    if (verdura) {
        projects[0].removeTask(verdura.id);
        saveProjects(projects);
    }
}

const pan = comprar?.collection.find(t => t.title === "pan");
if (pan) {
    pan.editTask({priority: "media"});
}
if (pan && pan.checklist.length === 0) {
    const item1 = pan.addChecklistItem("harina");
    const item2 = pan.addChecklistItem("levadura");
    pan.toggleChecklistItem(item1.id);
    pan.toggleChecklistItem(item2.id);
    saveProjects(projects);
}
console.log(pan.checklist)

//creamos un projecto nuevo para las pruebas de renombrado y borrado de projectos para que no interfieran con los otros
if (!projects.some(p => p.name === "Prueba" || p.name === "Prueba renombrada")) {
    const prueba = new Project("Prueba");
    projects.push(prueba);
    saveProjects(projects);
}

const prueba = projects.find(p => p.name === "Prueba");
if (prueba) {
    renameProject(projects, prueba.id, "Prueba renombrada");
    saveProjects(projects);
}
console.log(projects);

const pruebaRenombrada = projects.find(p => p.name ==="Prueba renombrada");
if (pruebaRenombrada) {
    projects = deleteProject(projects, pruebaRenombrada.id);
    saveProjects(projects);
}
saveProjects(projects);
console.log(projects);

document.body.textContent = projects.map(p => p.listTitles()).join(" | ");