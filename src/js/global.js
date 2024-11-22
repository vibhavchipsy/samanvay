import { loadPageContent } from "./utils/loadPageContent";

document.addEventListener("DOMContentLoaded", () => {
  // Determine the current slug
  const currentSlug = new URL(window.location.href).pathname.split("/").pop();

  // Load page content based on the slug
  loadPageContent(currentSlug);
});
