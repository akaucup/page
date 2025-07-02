function getUrlParameter(sParam) {
  const sPageURL = window.location.search.substring(1);
  const sURLVariables = sPageURL.split("&");
  for (let i = 0; i < sURLVariables.length; i++) {
    const sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] === sParam) {
      return decodeURIComponent(sParameterName[1]);
    }
  }
  return null;
}

window.onload = () => {
  const id =
    getUrlParameter("id") || Math.random().toString(36).substring(2, 10);
  document.getElementById("id-display").textContent = id;
  document.getElementById("title").textContent = id;

  const lang = document.getElementById("language");
  const en = document.getElementById("instruction-en");
  const idn = document.getElementById("instruction-id");

  lang.addEventListener("change", function () {
    if (this.value === "en") {
      en.classList.remove("hidden");
      idn.classList.add("hidden");
    } else {
      en.classList.add("hidden");
      idn.classList.remove("hidden");
    }
  });

  // Inisialisasi default
  if (lang.value === "en") {
    en.classList.remove("hidden");
    idn.classList.add("hidden");
  } else {
    en.classList.add("hidden");
    idn.classList.remove("hidden");
  }

  // === Dark Mode Toggle ===
  const toggleBtn = document.getElementById("theme-toggle");

  function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
  }

  applyTheme(localStorage.getItem("dark-mode") === "enabled");

  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    applyTheme(!isDark);
  });
};
