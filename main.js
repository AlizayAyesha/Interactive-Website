// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Navbar Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navbarList = document.getElementById("navbarList");

  if (menuToggle && navbarList) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("menu-open");
      navbarList.classList.toggle("active");
    });
  }

  // Smooth Scroll
  document.querySelectorAll(".navbar-list a").forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only smooth scroll for internal links
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth",
          });
        }
        // Close mobile menu after clicking a link
        navbarList.classList.remove("active");
        menuToggle.classList.remove("menu-open");
      }
    });
  });

  // Popup Logic
  const popup = document.getElementById("popup");
  const openPopup = document.getElementById("openPopup");
  const closePopup = document.getElementById("closePopup");

  if (openPopup && closePopup && popup) {
    openPopup.addEventListener("click", () => popup.classList.add("active"));
    closePopup.addEventListener("click", () => popup.classList.remove("active"));

    // Close popup when clicking outside the form
    window.addEventListener("click", (e) => {
      if (e.target === popup) popup.classList.remove("active");
    });
  }

  // File Upload Form
  const uploadForm = document.getElementById("uploadForm");
  if (uploadForm) {
    uploadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const file = document.getElementById("fileUpload").files[0];
      if (!file) return alert("⚠️ Please select a file before submitting.");
      alert(`✅ Thanks ${email}! Your template "${file.name}" has been uploaded.`);
      popup.classList.remove("active");
      e.target.reset();
    });
  }

  // Feedback Form
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackList = document.getElementById("feedbackList");

  if (feedbackForm && feedbackList) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const comment = document.getElementById("comment").value.trim();

      if (!name || !comment) {
        alert("⚠️ Please fill out both fields.");
        return;
      }

      const div = document.createElement("div");
      div.classList.add("feedback-item");
      div.innerHTML = `<strong>${name}:</strong><p>${comment}</p>`;
      feedbackList.appendChild(div);

      e.target.reset();
    });
  }

  // Optional: Scroll-to-top button (nice UX feature)
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.style.cssText = `
    position: fixed; bottom: 30px; right: 25px;
    background: #f06; color: #fff; border: none;
    border-radius: 50%; width: 40px; height: 40px;
    font-size: 1.2rem; cursor: pointer; display: none;
  `;
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
