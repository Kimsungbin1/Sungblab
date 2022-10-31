const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navlinks = document.querySelectorAll(".nav-links li");


const navAnimation = () => {
    navlinks.forEach((link, index) => {
        // 애니메이션이 있을 때
        if (link.style.animation) {
            // 애니메이션 비움
            link.style.animation = "";
        } else {
            // 애니메이션 없을 때 애니메이션을 추가
            // 딜레이 간격을 줘서 li가 하나씩 차례대로 나타나도록 설정
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
                }s`;
        }
    });
};
const handleNav = () => {
    nav.classList.toggle("nav-active");
    //nav Animation
    navAnimation();
    //burger Animation
    burger.classList.toggle("toggle");
};
const navSlide = () => {
    burger.addEventListener("click", handleNav);
};
const setNavTransition = (width) => {
    if (width > 768) {
        nav.style.transition = "";
    } else {
        nav.style.transition = "transform 0.5s ease-in";
    }
};
const handleResize = () => {
    const width = event.target.innerWidth;
    setNavTransition(width);
};
const init = () => {
    // Toggle Nav
    window.addEventListener("resize", handleResize);
    navSlide();
};

// 시계부분
init();

var clockStart = setInterval(function () {
    var today = new Date()
    var dayList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    var hh = addZero(today.getHours())
    var mm = addZero(today.getMinutes())
    var ss = addZero(today.getSeconds())

    var YY = today.getFullYear()
    var MM = today.getMonth() + 1
    var DD = today.getDate()
    var dd = dayList[today.getDay()].toUpperCase()

    document.getElementById('hours').innerText = hh
    document.getElementById('min').innerText = mm
    document.getElementById('sec').innerText = ss

    document.getElementById('month').innerText = MM
    document.getElementById('date').innerText = DD
    document.getElementById('year').innerText = YY
    document.getElementById('day').innerText = dd

    function addZero(num) {
        return (num < 10 ? '0' + num : '' + num)
    }
}, 1000)

