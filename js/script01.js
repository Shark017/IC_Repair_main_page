function initSlider() {
    let imageWindow = document.querySelector(".completed__projects-right-side-slider");
    let projectSelector01 = document.querySelector(".completed__projects-left-side-project-selector01");
    let projectSelector02 = document.querySelector(".completed__projects-left-side-project-selector02");
    let projectSelector03 = document.querySelector(".completed__projects-left-side-project-selector03");
    let linkOne = document.querySelector(".link01");
    let linkTwo = document.querySelector(".link02");
    let linkThree = document.querySelector(".link03");
    let leftArrow = document.querySelector(".completed__projects-left-side-left-arrow");
    let rightArrow = document.querySelector(".completed__projects-left-side-right-arrow");

    let images = [
        {src: "./img/Slider-main-picture-01.jpg", link: ".link02", link01: ".link03", selector: ".completed__projects-left-side-project-selector02", selector01: ".completed__projects-left-side-project-selector03"},
        {src: "./img/Slider-main-picture-02.jpg", link: ".link03", link01: ".link01", selector: ".completed__projects-left-side-project-selector03", selector01: ".completed__projects-left-side-project-selector01"},
        {src: "./img/Slider-main-picture-03.jpg", link: ".link01", link01: ".link02", selector: ".completed__projects-left-side-project-selector01", selector01: ".completed__projects-left-side-project-selector02"},
    ];

    function removeActive() {
        linkOne.classList.remove("active-link");
        linkTwo.classList.remove("active-link");
        linkThree.classList.remove("active-link");
    }

    function removeActiveSelector() {
        projectSelector01.classList.remove("active-selector");
        projectSelector02.classList.remove("active-selector");
        projectSelector03.classList.remove("active-selector");
    }

    function initArrows(){

    i = 0;

    linkOne.addEventListener('click', () => {
        imageWindow.innerHTML = `<img src="${images[0].src}">`;
        removeActive();
        removeActiveSelector();
        linkOne.classList.add("active-link");
        projectSelector01.classList.add("active-selector");
        i = 0;
    });

    linkTwo.addEventListener('click', () => {
        imageWindow.innerHTML = `<img src="${images[1].src}">`;
        removeActive();
        removeActiveSelector();
        linkTwo.classList.add("active-link");
        projectSelector02.classList.add("active-selector");
        i = 1;
    });

    linkThree.addEventListener('click', () => {
        imageWindow.innerHTML =`<img src="${images[2].src}">`;
        removeActive();
        removeActiveSelector();
        linkThree.classList.add("active-link");
        projectSelector03.classList.add("active-selector");
        i = 2;
    })

    projectSelector01.addEventListener('click', () => {
        imageWindow.innerHTML = `<img src="${images[0].src}">`;
        removeActive();
        removeActiveSelector();
        linkOne.classList.add("active-link");
        projectSelector01.classList.add("active-selector");
        i = 0;
    });

    projectSelector02.addEventListener('click', () => {
        imageWindow.innerHTML = `<img src="${images[1].src}">`;
        removeActive();
        removeActiveSelector();
        linkTwo.classList.add("active-link");
        projectSelector02.classList.add("active-selector");     
        i = 1;
    });

    projectSelector03.addEventListener('click', () => {
        imageWindow.innerHTML =`<img src="${images[2].src}">`;
        removeActive();
        removeActiveSelector();
        linkThree.classList.add("active-link");
        projectSelector03.classList.add("active-selector");
        i = 2;
    })
    
    rightArrow.addEventListener("click", () => {
        if (i!==2) {
            removeActive();
            removeActiveSelector();
            linkActive = document.querySelector(`${images[i].link}`);
            linkActive.classList.add("active-link");
            selectorActive = document.querySelector(`${images[i].selector}`);
            selectorActive.classList.add("active-selector");
            i++;
            imageWindow.innerHTML = `<img src="${images[i].src}">`; 
        } else {
            removeActive();
            removeActiveSelector();
            linkActive = document.querySelector(`${images[i].link}`);
            linkActive.classList.add("active-link");
            selectorActive = document.querySelector(`${images[i].selector}`);
            selectorActive.classList.add("active-selector");
            i = 0;
            imageWindow.innerHTML = `<img src="${images[0].src}">`;
        }
    });
    
    leftArrow.addEventListener("click", () => { 
        if (!i==0) {
            removeActive();
            removeActiveSelector();
            linkActive = document.querySelector(`${images[i].link01}`);
            linkActive.classList.add("active-link");
            selectorActive = document.querySelector(`${images[i].selector01}`);
            selectorActive.classList.add("active-selector");
            i--;
            imageWindow.innerHTML = `<img src="${images[i].src}">`;
    } else {
            removeActive();
            removeActiveSelector();
            linkActive = document.querySelector(`${images[i].link01}`);
            linkActive.classList.add("active-link");
            selectorActive = document.querySelector(`${images[i].selector01}`);
            selectorActive.classList.add("active-selector");
            imageWindow.innerHTML = `<img src="${images[2].src}">`
            i = 2;
    }});
    };
    
    initArrows();
};

document.addEventListener("DOMContentLoaded", initSlider);

function mobileSlider01() {

    let imageWindow = document.querySelector(".mobile-slider01");
    let rightArrow = document.querySelector(".right-arrow01");
    let leftArrow = document.querySelector(".left-arrow01");

    let images = [
        {src: "./img/Slider-main-picture-02.jpg"},
        {src: "./img/Slider-main-picture-01.jpg"},
        {src: "./img/Slider-main-picture-03.jpg"},
    ];

    i = 0;

    rightArrow.addEventListener("click", () => {
        if (i!==2) {
            i++;
            imageWindow.innerHTML = `<img src="${images[i].src}">`; 
        } else {
            i = 0;
            imageWindow.innerHTML = `<img src="${images[0].src}">`;
        }
    });

    leftArrow.addEventListener("click", () => { 
        if (!i==0) {
            i--;
            imageWindow.innerHTML = `<img src="${images[i].src}">`;
        } else {
            imageWindow.innerHTML = `<img src="${images[2].src}">`
            i = 2;
    }});
    
}

mobileSlider01();

function mobileSlider02() {

    let imageWindow = document.querySelector(".mobile__footer-container-slider");
    let rightArrow = document.querySelector(".right-arrow02");
    let leftArrow = document.querySelector(".left-arrow02");

    let images = [
        {src: "./img/Wild-fantasy-mobile.jpg"},
        {src: "./img/Fantasy-realization-img02.jpg"},
        {src: "./img/Fantasy-realization-img03.jpg"},
        {src: "./img/Fantasy-realization-img04.jpg"},
    ];

    i = 0;

    rightArrow.addEventListener("click", () => {
        if (i!==3) {
            i++;
            imageWindow.innerHTML = `<img src="${images[i].src}" style="width: 340px; height: 242px;">`; 
        } else {
            i = 0;
            imageWindow.innerHTML = `<img src="${images[0].src}" style="width: 340px; height: 242px;">`;
        }
    });

    leftArrow.addEventListener("click", () => { 
        if (!i==0) {
            i--;
            imageWindow.innerHTML = `<img src="${images[i].src}" style="width: 340px; height: 242px;">`;
        } else {
            imageWindow.innerHTML = `<img src="${images[3].src}" style="width: 340px; height: 242px;">`;
            i = 3;
    }});
    
}

mobileSlider02();