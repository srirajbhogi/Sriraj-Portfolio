function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")

}

// Deprecated
window.addEventListener('unload', function () {
  console.log('Page is unloading...');
});

// Recommended alternative
window.addEventListener('beforeunload', function (event) {
  // Show a warning dialog
  event.preventDefault();
  event.returnValue = ''; // Required for some browsers to show a dialog
});
