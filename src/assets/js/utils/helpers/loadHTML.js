export function loadHTML(path, containerId) {
  fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${path}`);
      }
      return response.text();
    })
    .then((html) => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = html;
      }
    })
    .catch((error) => {
      console.error("Error loading HTML:", error);
    });
}
