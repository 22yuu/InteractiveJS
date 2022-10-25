const frame = document.querySelector('section');
const list = frame.querySelectorAll('article');
const prev = document.querySelector('.btnPrev');
const next = document.querySelector('.btnNext');
const names =['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seansonal', 'Vespers'];
const len = list.length;
const deg = 360 / len; 

let num = 0;
let active = 0;

names.forEach((name, index) => {
    const pic = list[index].querySelector('.pic');
    const h2 = list[index].querySelector('.txt h2');
    list[index].style.transform = `rotate(${deg*index}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(./img/${name}.jpg)`;
    h2.innerText = name;

})
for(let i = 0; i < len; i++) {
    list[i].style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    // i마다 deg 정도 rotate! 또한 transform의 의해 회전이 되거나 변형이 되어도 축은 변하지 않음 그래서 translateY로 위로 요소를 보내면 회전한 방향에서 바로 자기자신 위로 수직으로 올라가게 됨
}

prev.addEventListener('click', () => {
    frame.style.transform = `rotate(${deg* ++num}deg)`;

    (active === 0) ? active = len - 1 : active = active - 1;
    for(let el of list) el.classList.remove('on');
    list[active].classList.add('on');
})

next.addEventListener('click', () => {
    frame.style.transform = `rotate(${deg* --num}deg)`;

    (active === len - 1) ? active = 0 : active = active + 1;
    for(let el of list) el.classList.remove('on');
    list[active].classList.add('on');
})