const them = document.getElementById("dark");

function toggleThem() {
  console.log("ds");
  document.body.classList.toggle("darkThem");
}
them.addEventListener("click", () => toggleThem());
