export { loadBeginnerProjects };

function loadBeginnerProjects() {

    projectsGrid.innerHTML = `

        <div class="project-card">
            <h3 class="project-title">First Project</h3>
            <div>
                <img src="/Portfolio/Images/Beginner/first.png" alt="First Project Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">My first web development project where I learned the basics of HTML.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

    `;
}