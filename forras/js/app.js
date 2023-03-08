document.getElementById("btt").addEventListener("click", (e) => {
  const t = document.getElementById("p1");
  const p = document.getElementById("p2");
  if (t.value === null || p.value === "") {
    alert("Válasszon ki egy pizzát a listából és írja ki a darabszámot!");
  }
});
