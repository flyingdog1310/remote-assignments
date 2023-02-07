const banner = document.querySelector(".banner");
const ctaBtn = document.querySelector(".cta-btn");

banner.addEventListener("click", () => {
  banner.innerHTML = "<h1>Have a GoodTime!<h1/>";
});

ctaBtn.addEventListener("click", () => {
  const groupBoxHidden = document.querySelector(".group-box-hidden");
  groupBoxHidden.style.display = "flex";
});
