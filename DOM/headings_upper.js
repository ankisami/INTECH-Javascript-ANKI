const title = document.querySelectorAll("h1, h2, h3, h4, h5, h6");



title.forEach(element => {
    element.textContent = element.textContent.toUpperCase();
});