async function loadProjects() {
    try {
        
        const response = await fetch('./../Data/projets.json');
        const projects = await response.json();

        const container = document.querySelector('#project-container');


        const projectHTML = projects.map(project => `
            <div class="projectElem">
                <img src="${project.image}" alt="${project.title}">

                <div class="projectTitle">
                    <h1>${project.title}</h1>
                </div>
            
                <div class="projectText">
                    <p>${project.description}</p>
                    <a href="${project.githubLink}" target="_blank">Voir sur github</a>
                </div>
            </div>
        `).join('')

        container.innerHTML = projectHTML;

    } catch (error) {
        console.error("Error loading projects:", error);
        container.innerHTML = "<p>Désolé, impossible de charger les projets pour le moment.</p>";
    }
}

loadProjects();