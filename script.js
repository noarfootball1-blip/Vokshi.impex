window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (nav) {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  }
});

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

// LANGUAGE SWITCH
function setLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    const value = el.getAttribute(`data-${lang}`);
    if (!value) return;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });

  localStorage.setItem("lang", lang);
}

// CATEGORY SWITCH (FIXED)
function showCategory(id) {
  document.querySelectorAll(".product-group").forEach(g => {
    g.classList.remove("active");
  });

  const el = document.getElementById(id);
  if (el) el.classList.add("active");

  console.log("clicked category:", id);
}

// MODAL
function initModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  if (!modal || !modalImg) return;

  document.querySelectorAll(".product-card img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  if (closeBtn) {
    closeBtn.onclick = () => modal.style.display = "none";
  }

  modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
}

// INIT
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);

  showCategory("tiles");

  initModal();
});