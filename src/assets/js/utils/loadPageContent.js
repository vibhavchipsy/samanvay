import { loadHTML } from "./helpers/loadHTML";
import { loadScript } from "./helpers/loadScript";

// Define the paths for each page's content
const HEADER_PATH = "/src/components/header/header.html";
const FOOTER_PATH = "/src/components/footer/footer.html";

//HOME PAGE
const HOME_PATH = "/src/pages/home/home.html";
const BANNER_PATH = "/src/pages/home/banner-carousel/banner-carousel.html";

// ABOUT PAGE
const ABOUT_PATH = "/src/pages/about/about.html";

export function loadPageContent(slug) {
  loadHTML(HEADER_PATH, "header");
  loadScript("/src/assets/js/header.js");

  const promises = []; // Array to hold promises

  // Load the correct content based on the slug
  if (slug === "") {
    promises.push(loadHTML(HOME_PATH, "app"));
    promises.push(loadHTML(BANNER_PATH, "banner"));
    promises.push(loadScript("/src/assets/js/home.js", { async: true })); // Load js file
  }

  if (slug === "about") {
    promises.push(loadHTML(ABOUT_PATH, "app"));
    promises.push(loadScript("/src/assets/js/about.js", { async: true })); // Load js file
  }

  promises.push(loadHTML(FOOTER_PATH, "footer"));

  // Use Promise.all to load all resources in parallel
  Promise.all(promises)
    .then(() => {
      console.log("page content loaded successfully");
    })
    .catch((error) => {
      console.error("Error loading content:", error);
    });
}
