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
});
