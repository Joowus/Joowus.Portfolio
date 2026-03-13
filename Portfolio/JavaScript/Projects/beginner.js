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

        <div class="project-card">
            <h3 class="project-title">Second Project</h3>
            <div>
                <img src="/Portfolio/Images/Beginner/second.png" alt="Second Project Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">My second web development project where I learned more about the basics of HTML.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Third Project</h3>
            <div>
                <img src="/Portfolio/Images/Beginner/third.png" alt="Third Project Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">My third web development project where I learned some basics of CSS.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Fourth Project</h3>
            <div>
                <img src="/Portfolio/Images/Beginner/fourth.png" alt="Fourth Project Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">My fourth web development project where I learned more about CSS.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Fifth Project</h3>
            <div>
                <img src="/Portfolio/Images/Beginner/fifth.png" alt="Fifth Project Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">My fifth web development project where I learned even more about CSS.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">Sixth Project</h3>
            <div>
                <img src="/Portfolio/Images/Beginner/sixth.png" alt="Sixth Project Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">My sixth web development project where I learned forms and form formatting in HTML.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

        <div class="project-card">
            <h3 class="project-title">First Blog</h3>
            <div>
                <img src="/Portfolio/Images/Beginner/firstblog.png" alt="First Blog Screenshot" class="project-image">
                <div class="project-desc-container">
                    <p class="project-description">My first blog site where I combined most of what I learned previously into 1 site, except the CSS elements.</p>
                    <a class="project-link" href="">View Project</a>
                </div>
            </div>
        </div>

    `;
}