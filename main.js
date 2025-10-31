// -------------------- Navbar Toggle --------------------
const menuToggle = document.getElementById("menuToggle");
const navbarList = document.getElementById("navbarList");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("menu-open");
  navbarList.classList.toggle("active");
});

// -------------------- Smooth Scroll for Navbar Links --------------------
document.querySelectorAll(".navbar-list a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
    navbarList.classList.remove("active");
    menuToggle.classList.remove("menu-open");
  });
});

// -------------------- Newsletter Popup --------------------
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

// -------------------- Template Upload Form --------------------
document.getElementById("uploadForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const file = document.getElementById("fileUpload").files[0];

  if (!file) {
    alert("⚠️ Please select a file before submitting.");
    return;
  }

  alert(`✅ Thanks ${email}! Your template "${file.name}" has been uploaded successfully.`);
  popup.classList.remove("active");
  document.body.classList.remove("blur");
  e.target.reset();
});

// -------------------- Free PDF Books Upload --------------------
document.getElementById("bookUploadForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  const file = document.getElementById("bookFile").files[0];

  if (!title || !author || !file) {
    alert("⚠️ Please fill out all fields and upload a PDF file.");
    return;
  }

  const bookList = document.getElementById("bookList");

  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.innerHTML = `
    <h4>${title}</h4>
    <p>by ${author}</p>
    <p class="filename">📘 ${file.name}</p>
  `;

  bookList.appendChild(bookCard);

  alert(`✅ Book "${title}" by ${author} added successfully!`);
  e.target.reset();
});

// -------------------- Feedback Form --------------------
document.getElementById("feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if (!name || !comment) {
    alert("⚠️ Please enter your name and feedback before submitting.");
    return;
  }

  const feedbackList = document.getElementById("feedbackList");

  const div = document.createElement("div");
  div.classList.add("feedback-item");
  div.innerHTML = `
    <strong>${name}</strong>
    <p>${comment}</p>
  `;

  feedbackList.appendChild(div);

  e.target.reset();
  alert("✅ Thank you for your feedback!");
});
