
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
}

function Close() {
        document.getElementById("menuContent").classList.remove("show");
    
    
        document.getElementById("menuContent").classList.add("hide");

        setTimeout(()=>{
            document.getElementById("menuContent").classList.remove("hide");
        },500)

}

// Contact