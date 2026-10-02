const nav = document.getElementById("nav");
const menu = document.getElementById("menuToggle");
if (menu) menu.addEventListener("click", () => nav.classList.toggle("open"));
if (nav) nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    lbImg.src = img.dataset.full || img.src;
    lbImg.alt = img.alt;
    lb.hidden = false;
  });
});
document.querySelector(".lb-close").addEventListener("click", () => { lb.hidden = true; lbImg.src = ""; });
lb.addEventListener("click", (e) => { if (e.target === lb) { lb.hidden = true; lbImg.src = ""; } });

const form = document.getElementById("contactForm");
if (form) form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fa = document.documentElement.lang === "fa";
  alert(fa ? "پیام شما ثبت شد. این یک فرم نمونه است." : "Thank you. This is a sample form.");
});
