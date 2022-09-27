window.addEventListener("load", function () {
  const btn = this.document.getElementById("click-change");
  const techgeek = this.document.getElementById("techgeek-header");
  btn.addEventListener("click", function () {
    techgeek.innerHTML = "テックギーク";
  });
});
