export function loadScript(scriptPath) {
  const script = document.createElement("script");
  script.src = scriptPath;
  script.type = "module"; // Ensure it uses ES module syntax if needed
  script.async = true; // Optional, but recommended to not block rendering
  document.body.appendChild(script);
}
