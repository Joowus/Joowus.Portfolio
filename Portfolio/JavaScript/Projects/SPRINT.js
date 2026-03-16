export { loadSPRINTProjects };

function loadSPRINTProjects() {

    projectsGrid.innerHTML = `

        <div class="project-card">
            <h3 class="project-title">Exercises</h3>
            <div>
                <img src="/Portfolio/Images/SPRINT/exercises.png" alt="Exercises Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">All of the small exercises for the SPRINT course.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Cypher Tool (Group Project)</h3>
            <div>
                <img src="/Portfolio/Images/SPRINT/cyphertool.png" alt="Cypher Tool Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">A group project where we created a simple cypher tool.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Notes Tool (Group Project)</h3>
            <div>
                <img src="/Portfolio/Images/SPRINT/notestool.png" alt="Notes Tool Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">A group project where we created a simple notes tool.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Weatherstation</h3>
            <div>
                <img src="/Portfolio/Images/SPRINT/weatherstation.png" alt="Weatherstation Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">A simplified imitation of an actual weather station system.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Wordle</h3>
            <div>
                <img src="/Portfolio/Images/SPRINT/wordle.png" alt="Wordle Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">GO version of the popular word guessing game WORDLE.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Banking App (Unfinished)</h3>
            <div>
                <img src="/Portfolio/Images/SPRINT/bankingapp.png" alt="Banking App Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">A simple banking application built in Go.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

    `;
}