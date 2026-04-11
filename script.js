const menuLinks = document.querySelectorAll(".menu a");
const nameLink = document.querySelector(".name");
const panels = document.querySelectorAll(".panel");
const projectThumbs = document.querySelectorAll(".project-thumb");

function showPanel(id) {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }

  menuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.section === id) {
      link.classList.add("active");
    }
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPanel(link.dataset.section);
  });
});

if (nameLink) {
  nameLink.addEventListener("click", (event) => {
    event.preventDefault();
    showPanel(nameLink.dataset.section);
  });
}

projectThumbs.forEach((thumb) => {
  thumb.addEventListener("click", (event) => {
    event.preventDefault();
    showPanel(thumb.dataset.project);
  });
});

showPanel("home");