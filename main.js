$(document).ready(function() {
  // Menu toggle logic
  $(".menu-toggle").on("click", function() {
    $(this).toggleClass("menu-open"); // Toggle menu-open class on menu-toggle
    $(".navbar-list").toggleClass("active"); // Toggle active class on navbar-list to show/hide menu
  });

  $(".link").on("click", function() {
    $(".link").removeClass("active"); // Remove active class from all links
    $(this).addClass("active"); // Add active class to the clicked link
    $(".navbar-list").removeClass("active"); // Hide navbar-list after clicking a link (optional)
    $(".menu-toggle").removeClass("menu-open"); // Reset menu toggle button to hamburger icon
  });
  
  $(document).ready(function() {
  $('.subscribe-btn').on("click", function(){
    $("#popup").addClass("active");
  })
  $(".close").on("click", function (){
    $("#popup").removeClass("active");
  })
})
})
