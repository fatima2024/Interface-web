lucide.createIcons();

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".menu-item").forEach((item) => {
  const href = item.getAttribute("href");

  if (href === currentPage) {
    item.classList.add("active");
  }
});