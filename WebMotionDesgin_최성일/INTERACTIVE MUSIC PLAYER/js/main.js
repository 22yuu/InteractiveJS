const frame = document.querySelector('section');
const list = frame.querySelectorAll('article');
const len = list.length;
const deg = 360 / len; 

for(let i = 0; i < len; i++) {
    list[i].style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    // i마다 deg 정도 rotate! 또한 transform의 의해 회전이 되거나 변형이 되어도 축은 변하지 않음 그래서 translateY로 위로 요소를 보내면 회전한 방향에서 바로 자기자신 위로 수직으로 올라가게 됨
}