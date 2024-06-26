const CURRENT_YEAR_SPAN = document.querySelector("#currentyear");
const LAST_MODIFIED = document.querySelector("#lastModified");

CURRENT_YEAR_SPAN.textContent = new Date().getFullYear();
LAST_MODIFIED.textContent = document.lastModified;

