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

    // Highlight active sidebar link based on current page
    const currentPath = window.location.pathname;
    document.querySelectorAll('.sidebar a').forEach(link => {
        const linkPath = new URL(link.href, window.location.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add('nav-active');
            // If inside a dropdown, open it
            const details = link.closest('details');
            if (details) details.open = true;
        }
    });

    document.body.insertAdjacentHTML('beforeend', `
<footer class="site-footer">
    <div class="footer-main">
        <div class="footer-brand">
            <img src="../assets/images/icon.png" alt="AI-Autostart logo" class="footer-logo">
            <span class="footer-brand-name">AI-Autostart</span>
            <p class="footer-tagline">Enabling inclusive interaction across kiosks and games through adaptive sensing.</p>
            <div class="footer-github-links">
                <a href="https://github.com/A13k5-5/COMP0016_2025_Team11_AI-autostart" target="_blank" class="footer-github-link">
                    <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    AI-Autostart
                </a>
                <a href="https://github.com/A13k5-5/COMP0016_2025_Team11_no-ui-game" target="_blank" class="footer-github-link">
                    <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    No-UI Game
                </a>
            </div>
        </div>
        <div class="footer-links">
            <h3 class="footer-heading">Documentation</h3>
            <ul>
                <li><a href="../requirements/index.html">Requirements</a></li>
                <li><a href="../research/index.html">Research</a></li>
                <li><a href="../ui-design/index.html">UI Design</a></li>
                <li><a href="../system-design/index.html">System Design</a></li>
                <li><a href="../implementation/index.html">Implementation</a></li>
                <li><a href="../testing/index.html">Testing</a></li>
                <li><a href="../evaluation/index.html">Evaluation</a></li>
                <li><a href="../appendices/index.html">Appendices</a></li>
            </ul>
        </div>
        <div class="footer-partners">
            <h3 class="footer-heading">Project Partners</h3>
            <div class="footer-partner-logos">
                <img src="../assets/images/motioninput.png" alt="MotionInput Games">
                <img src="../assets/images/nas.png" alt="NAS">
                <img src="../assets/images/rnib.png" alt="RNIB">
                <img src="../assets/images/intel.png" alt="Intel">
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2026 AI-Autostart. UCL Computer Science.</p>
    </div>
</footer>`);
})();
