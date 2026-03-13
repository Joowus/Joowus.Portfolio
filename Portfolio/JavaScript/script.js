import { loadAllProjects } from './Projects/all.js';
import { loadBeginnerProjects } from './Projects/beginner.js';
import { load100Projects } from './Projects/100-projects.js';


const allProjectsBtn = document.getElementById('allProjectsBtn');
const beginnerProjectsBtn = document.getElementById('beginnerProjectsBtn');
const _100ProjectsBtn = document.getElementById('100ProjectsBtn');
const courseProjectsBtn = document.getElementById('courseProjectsBtn');
const SPRINTProjectsBtn = document.getElementById('SPRINTProjectsBtn');
const otherProjectsBtn = document.getElementById('otherProjectsBtn');

const projectsExplanation = document.getElementById('projectCategoryExplanation');

function clearActive() {
    allProjectsBtn.classList.remove('project-category-active');
    beginnerProjectsBtn.classList.remove('project-category-active');
    _100ProjectsBtn.classList.remove('project-category-active');
    courseProjectsBtn.classList.remove('project-category-active');
    SPRINTProjectsBtn.classList.remove('project-category-active');
    otherProjectsBtn.classList.remove('project-category-active');
}

window.onload = () => {
    clearActive();
    allProjectsBtn.classList.add('project-category-active');
    projectsExplanation.textContent = "A collection of all my projects, showcasing a wide range of skills and technologies.";
    loadAllProjects();
}

allProjectsBtn.addEventListener('click', () => {
    clearActive();
    allProjectsBtn.classList.add('project-category-active');
    projectsExplanation.textContent = "A collection of all my projects, showcasing a wide range of skills and technologies.";
    loadAllProjects();
});
beginnerProjectsBtn.addEventListener('click', () => {
    clearActive();
    beginnerProjectsBtn.classList.add('project-category-active');
    projectsExplanation.textContent = "Simple projects that helped me learn the basics of programming and web development.";
    loadBeginnerProjects();
});
_100ProjectsBtn.addEventListener('click', () => {
    clearActive();
    _100ProjectsBtn.classList.add('project-category-active');
    projectsExplanation.textContent = "A series of small projects from a list of 100 that I completed to practice and improve my coding skills.";
    load100Projects();
});
courseProjectsBtn.addEventListener('click', () => {
    clearActive();
    courseProjectsBtn.classList.add('project-category-active');
    projectsExplanation.textContent = "Projects that I completed as part of my coursework, demonstrating my ability to apply what I've learned in a structured environment.";
    loadAllProjects();
});
SPRINTProjectsBtn.addEventListener('click', () => {
    clearActive();
    SPRINTProjectsBtn.classList.add('project-category-active');
    projectsExplanation.textContent = "Projects that I completed during intensive coding sprints, showcasing my ability to work under pressure and deliver results quickly.";
    loadAllProjects();
});
otherProjectsBtn.addEventListener('click', () => {
    clearActive();
    otherProjectsBtn.classList.add('project-category-active');
    projectsExplanation.textContent = "A variety of projects that don't fit into the other categories but still demonstrate my skills and creativity.";
    loadAllProjects();
});