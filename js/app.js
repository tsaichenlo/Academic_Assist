document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    heroSection.style.opacity = 0;
    window.setTimeout(() => {
        heroSection.style.transition = 'opacity 2s';
        heroSection.style.opacity = 1;
    }, 100);

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    let initialTabs = document.getElementsByClassName("tablinks");
    if (initialTabs.length > 0) {
        initialTabs[0].click(); 
    }
});


function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block"; 
    evt.currentTarget.className += " active"; 
}

document.addEventListener('DOMContentLoaded', function() {
    const userIconLink = document.getElementById('userIconLink');

    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        userIconLink.href = 'dashboard.html';
    } else {
        userIconLink.href = 'login.html';
    }
});