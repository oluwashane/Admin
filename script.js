// side bar toggle 
let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");
const sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive")
    sidebarOpen = true
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive")
    sidebarOpen= false
  }
}