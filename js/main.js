const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "/img/icons/nav-close.svg";
        document.body.classList.add('no-scroll')

    } else {
        navBtnImg.src = "/img/icons/nav-open.svg";
        document.body.classList.remove('no-scroll')
    }
}

AOS.init();