
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    links.classList.toggle('active');
})

var clockStart = setInterval(function() {
    var today = new Date()
    var dayList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
 
    var hh = addZero(today.getHours())
    var mm = addZero(today.getMinutes())
    var ss = addZero(today.getSeconds())
 
    var YY = today.getFullYear()
    var MM = today.getMonth()+1
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
        return (num < 10 ? '0'+num : ''+num)
    }
}, 1000)