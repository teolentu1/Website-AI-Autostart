(function () {
    const topNavHost = document.getElementById('shared-top-nav');
    const sidebarHost = document.getElementById('shared-sidebar');

    if (!topNavHost || !sidebarHost) {
        return;
    }

    topNavHost.innerHTML = `
<nav class="top-nav">
    <a href="../index.html">Home</a>
    <a href="../Requirements/requirements.html">Requirements</a>
    <a href="../Research/research.html">Research</a>
    <a href="../UI Design/ui-design.html">UI Design</a>
    <a href="../System Design/system-design.html">System Design</a>
    <a href="../Implementation/implementation.html">Implementation</a>
    <a href="../Testing/testing.html">Testing</a>
    <a href="../Evaluation/evaluation.html">Evaluation</a>
    <a href="../Appendices/appendices.html">Appendices</a>
</nav>`;

    sidebarHost.innerHTML = `
<aside class="sidebar">
    <a class="home-link" href="../index.html">Home</a>
    <h2>Navigation</h2>
    <details class="nav-group">
        <summary><a class="group-link" href="../Requirements/requirements.html">Requirements</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../Requirements/partner-introduction.html">Partner Introduction</a>
            <a href="../Requirements/project-background.html">Project Background</a>
            <a href="../Requirements/project-goals.html">Project Goals</a>
            <a href="../Requirements/requirements-gathering.html">Requirements Gathering</a>
            <a href="../Requirements/use-cases.html">Use Cases</a>
            <a href="../Requirements/moscow-requirements-list.html">MoSCoW Requirements List</a>
        </div>
    </details>
    <details class="nav-group">
        <summary><a class="group-link" href="../Research/research.html">Research</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../Research/field-research.html">Field Research</a>
            <a href="../Research/related-projects-review.html">Related Projects Review</a>
            <a href="../Research/technology-review.html">Technology Review</a>
        </div>
    </details>
    <a class="nav-item" href="../UI Design/ui-design.html">UI Design</a>
    <a class="nav-item" href="../System Design/system-design.html">System Design</a>
    <details class="nav-group">
        <summary><a class="group-link" href="../Implementation/implementation.html">Implementation</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../Implementation/gesture-recognition.html">Gesture Recognition</a>
            <a href="../Implementation/person-recognition.html">Person Recognition</a>
            <a href="../Implementation/game-graph-design.html">Game Graph Design</a>
            <a href="../Implementation/audio-generation.html">Audio Generation</a>
            <a href="../Implementation/ai-generation.html">AI Generation</a>
            <a href="../Implementation/user-interface.html">User Interface</a>
            <a href="../Implementation/application-packaging.html">Application Packaging</a>
        </div>
    </details>
    <a class="nav-item" href="../Testing/testing.html">Testing</a>
    <details class="nav-group">
        <summary><a class="group-link" href="../Evaluation/evaluation.html">Evaluation</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../Evaluation/summary-of-achievements.html">Summary of Achievements</a>
            <a href="../Evaluation/critical-evaluation-of-project.html">Critical Evaluation of Project</a>
            <a href="../Evaluation/future-work.html">Future Work</a>
        </div>
    </details>
    <details class="nav-group">
        <summary><a class="group-link" href="../Appendices/appendices.html">Appendices</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../Appendices/user-manual.html">User Manual</a>
            <a href="../Appendices/ai-autostart-readme.html">AI Autostart README</a>
            <a href="../Appendices/no-gui-game-readme.html">No GUI Game README</a>
            <a href="../Appendices/gdpr.html">GDPR</a>
            <a href="../Appendices/dependencies.html">Dependencies</a>
            <a href="../Appendices/contributions.html">Contributions</a>
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
