document.addEventListener("DOMContentLoaded", () => {
  let sidebarNavs = document.querySelectorAll(".sidebar-nav");

  const sidebarCB = (e) => {
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
      e.stopPropagation();
      e.preventDefault();

      let innerText = e.target.innerText.toLowerCase();
      window.location.hash = innerText;
    }
  }
  for (let i = 0; i < sidebarNavs.length; i++) {
    sidebarNavs[i].addEventListener("click", sidebarCB);
  }
});