// Navbar Hide on Scroll
let lastScroll = 0;
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.top = "-80px"; // Hide
  } else {
    navbar.style.top = "0"; // Show
  }
  lastScroll = currentScroll;
});


// Popup Functions
function openPopup() {
  document.getElementById("contactPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("contactPopup").style.display = "none";
}
