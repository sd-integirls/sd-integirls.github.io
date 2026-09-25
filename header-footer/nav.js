// opens/closes the menu on small screens
document.addEventListener('DOMContentLoaded', function () {
    const bar = document.querySelector('.top-bar');
    const toggle = document.querySelector('.nav-toggle');
    if (!bar || !toggle) return;

    toggle.addEventListener('click', function () {
        const open = bar.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', open);
    });
});
