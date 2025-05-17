function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

async function loadNavigation() {
    try {
        const response = await fetch('navigation.html');
        const navigationHTML = await response.text();
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = navigationHTML;
        }
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadNavigation);