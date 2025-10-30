// Navbar toggle for mobile view
const menuToggle = document.getElementById("menuToggle");
const navbarList = document.getElementById("navbarList");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("menu-open");
  navbarList.classList.toggle("active");
});

// Smooth scrolling for navbar links
document.querySelectorAll('.navbar-list a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
    navbarList.classList.remove("active");
    menuToggle.classList.remove("menu-open");
  });
});

// Newsletter popup
const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", () => {
  popup.classList.add("active");
  document.body.classList.add("blur");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
  document.body.classList.remove("blur");
});

// Upload Form
document.getElementById("uploadForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const file = document.getElementById("fileUpload").files[0];
  if (!file) {
    alert("Please select a file.");
    return;
  }
  alert(`Thanks ${email}! Your template "${file.name}" has been uploaded.`);
  popup.classList.remove("active");
  document.body.classList.remove("blur");
  e.target.reset();
});

// Feedback form
document.getElementById("feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();
  if (!name || !comment) return;

  const div = document.createElement("div");
  div.classList.add("feedback-item");
  div.innerHTML = `<strong>${name}:</strong><p>${comment}</p>`;
  document.getElementById("feedbackList").appendChild(div);

  e.target.reset();
});
