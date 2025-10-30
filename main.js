$(document).ready(function () {

  // ===== Menu Toggle Logic =====
  $(".menu-toggle").on("click", function () {
    $(this).toggleClass("menu-open");
    $(".navbar-list").toggleClass("active");
  });

  // ===== Navbar Active Link Logic =====
  $(".link").on("click", function () {
    $(".link").removeClass("active");
    $(this).addClass("active");
    $(".navbar-list").removeClass("active");
    $(".menu-toggle").removeClass("menu-open");
  });

  // ===== Popup Open/Close =====
  $(".subscribe-btn").on("click", function () {
    $("#popup").addClass("active");
  });

  $(".close").on("click", function () {
    $("#popup").removeClass("active");
  });

  // ===== File Upload + Email Validation =====
  $("#upload-form").on("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const email = $("#email").val().trim();
    const file = $("#fileUpload")[0].files[0];

    // Validate email format
    if (!validateEmail(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    // Ensure a file is uploaded
    if (!file) {
      alert("❌ Please upload a file before submitting.");
      return;
    }

    // Success message
    alert(`✅ File '${file.name}' uploaded successfully for ${email}.`);
    $("#popup").removeClass("active");
    this.reset(); // Clear input fields
  });

  // ===== Email Validation Helper Function =====
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
