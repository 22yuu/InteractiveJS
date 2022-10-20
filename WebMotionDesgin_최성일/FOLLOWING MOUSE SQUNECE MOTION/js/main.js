/**
 * 동적으로 DOM 생성
 * 부모요소.innerHTML = "집어넣을 태그를 문자열";
 * --> 기존 부모안쪽의 자식요소를 모두 제거하고 새로 생성
 * 
 * 부모요소.append(DOM node);
 * --> 인수로 생성할 태그의 문자열이 아닌 노드를 생성해서 삽입
 * 
 * 새로운 DOM노드 생성방법
 * document.createElement('dom이름');
 */

const main = document.querySelector('main');
const loading = document.querySelector('aside');
const logo = document.querySelector('p img');
// 요소들을 생성하는 첫 번째 방법
for(let i = 0; i < 200; i++) {
    const imgNode = document.createElement('img');
    imgNode.setAttribute('src', `img/pic${i}.jpg`);
    main.append(imgNode);
}


/* 요소를 생성하는 두 번쨰 방법
let tags = '';
for(let i = 0; i < 200; i++) {
    tags += `<img src='img/pic${i}.jpg'>`;
}

console.log(tags);
main.innerHTML = tags;
*/

imageLoaded();

window.addEventListener('mousemove', e => {
    let x = e.pageX;
    let y = e.pageY;
    let cx = -x/10;
    let cy = -y/10;

    logo.style.transform = `translate(${cx}px, ${cy}px)`;

    let wid = window.innerWidth;
    let percent = parseInt((x/wid)*200);
    console.log(percent);

    const imgs = document.querySelectorAll('main img');

    for(let img of imgs) img.style.display = 'none';
    imgs[percent].style.display = 'block';

    console.log(x);


})


function imageLoaded() {
    const imgs = document.querySelectorAll('img');
const len = imgs.length;
let total = 0;
let percent = 0;


imgs.forEach((img, index) => {
    img.addEventListener('load', () => {
        total++;
        percent = parseInt((total/len)*100);
        loading.innerText = `${total} / ${len} (${percent}%)`;

        if(total === len) {
            main.classList.add('on');
            // loading.remove(); // 아예 DOM 노드를 날려버림 malloc이랑 비슷한 역할을 하는듯?
            loading.classList.add('off');

            setTimeout(() => {
                loading.remove();
            },  convertSpeed(loading));
        }

    })
})
}

function convertSpeed(el) {
    /*
        getComputedStyle함수를 통해 요소의 transition 값으로 초를 계산해줌
        따라서 해당 함수를 이용해 초를 계산 한 후 리턴해주면 동적으로 설정 가능
    */
    let speed = getComputedStyle(el).transitionDuration;
    speed = parseFloat(speed)*1000;
    return speed;
}

const delay = convertSpeed(loading); // 현재 loading의 css 요소 중 transition 값이 2.5s임
console.log(delay); // 2500