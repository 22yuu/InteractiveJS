
window.addEventListener("load", () => {
    const grid = new Isotope("section", {
        itemSelector: "article", // 실제 적용할 요소
        columnWidth: "article", // 요소를 넣으면 해당 요소의 너비에 맞게 해줌
        transitionDuration: "0.5s",
    }); // 적용할 요소의 부모 요소로 생성

    const btns = document.querySelectorAll("main ul li");

    btns.forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();

            const isOn = e.currentTarget.classList.contains("on");
            if(isOn) return;
            activation(e);
        })
    })

    function activation(event) {
        // console.log("Activation called!!!")
        for(let btn of btns) btn.classList.remove("on");
        event.currentTarget.classList.add("on");

        const btn_a = event.currentTarget.querySelector("a");
        const a_href = btn_a.getAttribute("href");

        grid.arrange({filter: a_href});
    }
})