const input = document.getElementById("inputPublicacion");
const muro = document.getElementById("muro");

// Cargar publicaciones guardadas
let publicaciones = JSON.parse(localStorage.getItem("publicaciones")) || [];
mostrarPublicaciones();

// Detectar Enter
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    const texto = input.value.trim();
    publicaciones.unshift(texto); // agregar al inicio
    localStorage.setItem("publicaciones", JSON.stringify(publicaciones));
    input.value = "";
    mostrarPublicaciones();
  }
});

// Mostrar publicaciones
function mostrarPublicaciones() {
  muro.innerHTML = "";
  publicaciones.forEach(pub => {
    const div = document.createElement("div");
    div.className = "post";
    div.textContent = pub;
    muro.appendChild(div);
  });
}
