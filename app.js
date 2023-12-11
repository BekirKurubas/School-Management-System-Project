import { render } from './Load Page js Folder/function.js';
import { loadHomePage } from './Load Page js Folder/homePage.js';
import { loadClassesPage } from './Load Page js Folder/classesPage.js';
import { loadTeachersPage } from './Load Page js Folder/teachersPage.js'; 
import { loadStudentsPage } from './Load Page js Folder/studentsPage.js';

document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector('.main-container');

    render(loadHomePage, mainContainer);

    document.getElementById('home-link').addEventListener('click', (event) => {
        event.preventDefault();
        render(loadHomePage, mainContainer);
    });

    document.getElementById('classes-link').addEventListener('click', () => {
        render(loadClassesPage, mainContainer);
    });

    document.getElementById('teachers-link').addEventListener('click', () => {
        render(loadTeachersPage, mainContainer);
    });

    document.getElementById('students-link').addEventListener('click', () => {
        render(loadStudentsPage, mainContainer);
    });
});
