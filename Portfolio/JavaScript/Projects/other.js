export { loadOtherProjects };

function loadOtherProjects() {

    projectsGrid.innerHTML = `

        <div class="project-card">
            <h3 class="project-title">Age Calculator</h3>
            <div>
                <img src="/Portfolio/Images/other/agecalc.png" alt="Age Calculator Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">Calculates the age of a person based on their birth date.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Calculator</h3>
            <div>
                <img src="/Portfolio/Images/other/calculator.png" alt="Calculator Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">A simple calculator for basic arithmetic operations.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Todo List</h3>
            <div>
                <img src="/Portfolio/Images/other/todolist.png" alt="Todo List Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">A simple todo list application for managing tasks.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Random Blog</h3>
            <div>
                <img src="/Portfolio/Images/other/randomblog.png" alt="Random Blog Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">A simple blog application for sharing random thoughts and ideas.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Youtube Replica</h3>
            <div>
                <img src="/Portfolio/Images/other/youtube.png" alt="Youtube Replica Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">Imitation of Youtubes interface without the functionality.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Rock Paper Scissors</h3>
            <div>
                <img src="/Portfolio/Images/other/RPS.png" alt="Rock Paper Scissors Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">A simple implementation of the classic Rock Paper Scissors game.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

    `;
}