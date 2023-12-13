// app.js
/* import { loadHomePage } from './functions/pages/homePage';
import { loadTeachersPage } from './functions/pages/teachersPage';
import { loadClassesPage } from './functions/pages/classesPage';
import { loadStudentsPage } from './functions/pages/studentsPage';
 */
const renderPage = (pageLoaderFunction, container) => {
    container.innerHTML = '';  // Mevcut içeriği temizle
    pageLoaderFunction(container);  // Yeni sayfa içeriğini yükle
};


document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.getElementById('main-container');

    // Ana sayfa varsayılan olarak yüklenir
    renderPage(loadHomePage, mainContainer);

    // Diğer sayfalar için olay dinleyiciler
    document.getElementById('home-link').addEventListener('click', (event) => {
        event.preventDefault();
        renderPage(loadHomePage, mainContainer);
    });

    document.getElementById('classes-link').addEventListener('click', (event) => {
        event.preventDefault();
        renderPage(loadClassesPage, mainContainer);
    });

    document.getElementById('teachers-link').addEventListener('click', (event) => {
        event.preventDefault();
        renderPage(loadTeachersPage, mainContainer);
    });

    document.getElementById('students-link').addEventListener('click', (event) => {
        event.preventDefault();
        renderPage(loadStudentsPage, mainContainer);
    });
});
