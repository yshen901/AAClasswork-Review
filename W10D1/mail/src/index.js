import Router from "./router";

document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to detect clicks in the NAV panel
  const sidebarNavs = document.querySelectorAll(".sidebar-nav");
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

  // Add router to the content page to tie it to the hash
  const content = document.querySelector('.content');
  const router = new Router(content);
});