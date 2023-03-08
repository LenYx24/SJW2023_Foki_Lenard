function click() {
  const t = document.getElementById("p1");
  const p = document.getElementById("p2");
  if (t.value === null || p.value === null) {
    alert("Válasszon ki egy pizzát a listából és írja ki a darabszámot!");
  }
  console.log(t.value);
  console.log(p.value);
}
