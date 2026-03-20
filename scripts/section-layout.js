(function () {
    const topNavHost = document.getElementById('shared-top-nav');
    const sidebarHost = document.getElementById('shared-sidebar');

    if (!topNavHost || !sidebarHost) {
        return;
    }

    topNavHost.innerHTML = `
<nav class="top-nav">
    <a class="nav-brand" href="../index.html">
        <img src="../assets/images/icon.png" alt="AI-Autostart logo" class="nav-brand-icon">
        <span class="nav-brand-text">AI-Autostart</span>
    </a>
    <div class="nav-links">
        <a href="../index.html">Home</a>
        <a href="../requirements/index.html">Requirements</a>
        <a href="../research/index.html">Research</a>
        <a href="../ui-design/index.html">UI Design</a>
        <a href="../system-design/index.html">System Design</a>
        <a href="../implementation/index.html">Implementation</a>
        <a href="../testing/index.html">Testing</a>
        <a href="../evaluation/index.html">Evaluation</a>
        <a href="../appendices/index.html">Appendices</a>
    </div>
</nav>`;

    sidebarHost.innerHTML = `
<aside class="sidebar">
    <a class="home-link" href="../index.html">Home</a>
    <h2>Navigation</h2>
    <details class="nav-group">
        <summary><a class="group-link" href="../requirements/index.html">Requirements</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../requirements/partner-introduction.html">Partner Introduction</a>
            <a href="../requirements/project-background.html">Project Background</a>
            <a href="../requirements/project-goals.html">Project Goals</a>
            <a href="../requirements/requirements-gathering.html">Requirements Gathering</a>
            <a href="../requirements/use-cases.html">Use Cases</a>
            <a href="../requirements/moscow-requirements-list.html">MoSCoW Requirements List</a>
        </div>
    </details>
    <details class="nav-group">
        <summary><a class="group-link" href="../research/index.html">Research</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../research/field-research.html">Field Research</a>
            <a href="../research/related-projects-review.html">Related Projects Review</a>
            <a href="../research/technology-review.html">Technology Review</a>
        </div>
    </details>
    <a class="nav-item" href="../ui-design/index.html">UI Design</a>
    <a class="nav-item" href="../system-design/index.html">System Design</a>
    <details class="nav-group">
        <summary><a class="group-link" href="../implementation/index.html">Implementation</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../implementation/gesture-recognition.html">Gesture Recognition</a>
            <a href="../implementation/person-recognition.html">Person Recognition</a>
            <a href="../implementation/game-graph-design.html">Game Graph Design</a>
            <a href="../implementation/audio-generation.html">Audio Generation</a>
            <a href="../implementation/ai-generation.html">AI Generation</a>
            <a href="../implementation/user-interface.html">User Interface</a>
            <a href="../implementation/application-packaging.html">Application Packaging</a>
        </div>
    </details>
    <a class="nav-item" href="../testing/index.html">Testing</a>
    <details class="nav-group">
        <summary><a class="group-link" href="../evaluation/index.html">Evaluation</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../evaluation/summary-of-achievements.html">Summary of Achievements</a>
            <a href="../evaluation/critical-evaluation-of-project.html">Critical Evaluation of Project</a>
            <a href="../evaluation/future-work.html">Future Work</a>
        </div>
    </details>
    <details class="nav-group">
        <summary><a class="group-link" href="../appendices/index.html">Appendices</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../appendices/user-manual.html">User Manual</a>
            <a href="../appendices/ai-autostart-readme.html">AI Autostart README</a>
            <a href="../appendices/no-ui-game-readme.html">No GUI Game README</a>
            <a href="../appendices/gdpr.html">GDPR</a>
            <a href="../appendices/dependencies.html">Dependencies</a>
            <a href="../appendices/contributions.html">Contributions</a>
        </div>
    </details>
</aside>`;

    document.querySelectorAll('.nav-group > summary').forEach((summary) => {
        const details = summary.parentElement;
        const arrow = summary.querySelector('.dropdown-arrow');

        summary.addEventListener('click', (event) => {
            if (event.target.closest('.group-link')) {
                event.stopPropagation();
                return;
            }

            if (event.target.closest('.dropdown-arrow')) {
                event.preventDefault();
                event.stopPropagation();
                details.open = !details.open;
                return;
            }

            event.preventDefault();
        });

        if (arrow) {
            arrow.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                details.open = !details.open;
            });
        }
    });
})();
