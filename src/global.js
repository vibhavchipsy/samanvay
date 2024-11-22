// global.js
function loadHTML(path, containerId) {
    fetch(path)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading HTML:", error);
        });
}

// Load header and footer into each page
loadHTML("/header.html", "header");
loadHTML("/footer.html", "footer");
