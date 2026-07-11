
// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Copy email
document.getElementById("copyEmailBtn").addEventListener("click", async () => {
  const email = "prabhakarreddy8897@gmail.com";
  const btn = document.getElementById("copyEmailBtn");

  try {
    await navigator.clipboard.writeText(email);
    const old = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = old), 1200);
  } catch {
    alert("Copy failed. Email: " + email);
  }
});

// Theme toggle (dark/light)
const themeBtn = document.getElementById("themeToggle");
const storageKey = "portfolio_theme";

function setTheme(mode){
  if (mode === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
  localStorage.setItem(storageKey, mode);
}

const saved = localStorage.getItem(storageKey);
if (saved === "light") setTheme("light");

themeBtn.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  setTheme(isLight ? "dark" : "light");
});
