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
    <a class="nav-item" href="../research/index.html">Research</a>
    <a class="nav-item" href="../ui-design/index.html">UI Design</a>
    <a class="nav-item" href="../system-design/index.html">System Design</a>
    <details class="nav-group">
        <summary><a class="group-link" href="../implementation/index.html">Implementation</a><button class="dropdown-arrow" type="button" aria-label="Toggle dropdown">&#9656;</button></summary>
        <div class="sub-links">
            <a href="../implementation/controller.html">AI-Autostart - Controller</a>
            <a href="../implementation/gesture-recognition.html">Hand Gesture Recognition</a>
            <a href="../implementation/game-graph.html">No-GUI Game Graph Representation</a>
            <a href="../implementation/noui-filetype.html">.noui Filetype</a>
            <a href="../implementation/file-management.html">No-GUI Game File Management</a>
            <a href="../implementation/tts.html">TTS Implementation</a>
            <a href="../implementation/llm.html">LLM Implementation</a>
            <a href="../implementation/game-player.html">No-GUI Game Player Implementation</a>
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
            <a href="../appendices/AA-user-manual.html">AI-Autostart User Manual</a>
            <a href="../appendices/nogui-user-manual.html">No-GUI User Manual</a>
            <a href="../appendices/ai-autostart-readme.html">AI-Autostart README</a>
            <a href="../appendices/no-ui-game-readme.html">No GUI Game README</a>
            <a href="../appendices/gdpr.html">GDPR and Legal Compliance</a>
            <a href="../appendices/privacy-policy.html">Privacy Policy</a>
<a href="../appendices/contributions.html">Contributions</a>
            <a href="../appendices/progress-videos.html">Monthly Progress Videos</a>
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

    // Inject prev/next page navigation
    const PAGES = [
        { path: 'requirements/index.html',                          label: 'Requirements' },
        { path: 'requirements/partner-introduction.html',           label: 'Partner Introduction' },
        { path: 'requirements/project-background.html',             label: 'Project Background' },
        { path: 'requirements/project-goals.html',                  label: 'Project Goals' },
        { path: 'requirements/requirements-gathering.html',         label: 'Requirements Gathering' },
        { path: 'requirements/use-cases.html',                      label: 'Use Cases' },
        { path: 'requirements/moscow-requirements-list.html',       label: 'MoSCoW Requirements List' },
        { path: 'research/index.html',                              label: 'Research' },
        { path: 'ui-design/index.html',                             label: 'UI Design' },
        { path: 'system-design/index.html',                         label: 'System Design' },
        { path: 'implementation/index.html',                        label: 'Implementation' },
        { path: 'implementation/controller.html',                   label: 'AI-Autostart - Controller' },
        { path: 'implementation/gesture-recognition.html',          label: 'Hand Gesture Recognition' },
        { path: 'implementation/game-graph.html',                   label: 'No-GUI Game Graph Representation' },
        { path: 'implementation/noui-filetype.html',                label: '.noui Filetype' },
        { path: 'implementation/file-management.html',              label: 'No-GUI Game File Management' },
        { path: 'implementation/tts.html',                          label: 'TTS Implementation' },
        { path: 'implementation/llm.html',                          label: 'LLM Implementation' },
        { path: 'implementation/game-player.html',                  label: 'No-GUI Game Player Implementation' },
        { path: 'testing/index.html',                               label: 'Testing' },
        { path: 'evaluation/index.html',                            label: 'Evaluation' },
        { path: 'evaluation/summary-of-achievements.html',          label: 'Summary of Achievements' },
        { path: 'evaluation/critical-evaluation-of-project.html',   label: 'Critical Evaluation of Project' },
        { path: 'evaluation/future-work.html',                      label: 'Future Work' },
        { path: 'appendices/index.html',                            label: 'Appendices' },
        { path: 'appendices/AA-user-manual.html',                   label: 'AI-Autostart User Manual' },
        { path: 'appendices/nogui-user-manual.html',                label: 'No-GUI User Manual' },
        { path: 'appendices/ai-autostart-readme.html',              label: 'AI-Autostart README' },
        { path: 'appendices/no-ui-game-readme.html',                label: 'No GUI Game README' },
        { path: 'appendices/gdpr.html',                             label: 'GDPR and Legal Compliance' },
        { path: 'appendices/privacy-policy.html',                   label: 'Privacy Policy' },
        { path: 'appendices/contributions.html',                    label: 'Contributions' },
        { path: 'appendices/progress-videos.html',                  label: 'Monthly Progress Videos' },
    ];

    const pagePath = window.location.pathname;
    const idx = PAGES.findIndex(p => pagePath.endsWith('/' + p.path));
    if (idx !== -1) {
        const prev = PAGES[idx - 1];
        const next = PAGES[idx + 1];
        const navEl = document.createElement('div');
        navEl.className = 'page-nav';
        if (prev) navEl.innerHTML += `<a href="../${prev.path}" class="prev">${prev.label}</a>`;
        if (next) navEl.innerHTML += `<a href="../${next.path}" class="next">${next.label}</a>`;
        const main = document.querySelector('main.content');
        if (main) main.appendChild(navEl);
    }

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
                    No-GUI Game
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
                <img src="../assets/images/ibm.png" alt="IBM">
                <img src="../assets/images/microsoft.png" alt="Microsoft">
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2026 AI-Autostart. UCL Computer Science.</p>
    </div>
</footer>`);
})();
