console.log("Hey there i am Javascript");

let ToggleMenu = document.getElementById('ToggleMenu');
let bg = document.getElementById('bg');
let toggle = document.querySelector('.burger');
// For Hamburger Menu
function OpenMenu() {
    bg.classList.toggle('body');
    ToggleMenu.classList.toggle('nav-active');
    ToggleMenu.classList.toggle('opacity');
    toggle.classList.toggle('toggle');

}

// For DropDown

let features = document.getElementById('features');
let company = document.getElementById('company');

function OpenFeatures() {
    if (company.classList.toggle('open-company')) {
        company.classList.toggle('open-company')
    }
    features.classList.toggle('open-features');
    if (icon_company.classList.toggle('active-company')) {
        icon_company.classList.toggle('active-company');
    }
}
function OpenCompany() {
    if (features.classList.toggle('open-features')) {
        features.classList.toggle('open-features')
    }
    company.classList.toggle('open-company');
    if (icon_features.classList.toggle('active-features')) {
        icon_features.classList.toggle('active-features');
    }

}
// For rotation of icon
const icon_features = document.querySelector('.features-drop');
const icon_company = document.querySelector('.company-drop');
icon_features.addEventListener('click', () => {
    icon_features.classList.toggle('active-features');

});
icon_company.addEventListener('click', () => {
    icon_company.classList.toggle('active-company');
})
console.log(icon);

let body = document.querySelector("body");

