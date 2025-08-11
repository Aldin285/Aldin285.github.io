
// Header & Footer fetch
fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });


// Menu sidebar
function Open() {
    document.getElementById("menuContent").classList.remove("hide");
    document.getElementById("menuContent").classList.add("show");
    document.getElementById("menu-overlay").classList.add("active");
}

function Close() {
        document.getElementById("menuContent").classList.remove("show");
        document.getElementById("menu-overlay").classList.remove("active");
    
        document.getElementById("menuContent").classList.add("hide");

        setTimeout(()=>{
            document.getElementById("menuContent").classList.remove("hide");
        },500)

}

// Vanta.js
document.addEventListener("DOMContentLoaded", function () {
  VANTA.NET({
    el: ".vanta-section",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x2ebd9b,         // Line color
    backgroundColor: 0x061d1a, // Background color
    points: 12.00
  });
});