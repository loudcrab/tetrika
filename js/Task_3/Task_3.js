let elem2 = document.getElementById("id2");
let elem3 = document.getElementById("id3");

elem2.addEventListener("click", (e) => console.log(e.currentTarget.style.background)
)
;
elem3.addEventListener("click", (e) => {
    //Запрещаем всплытие
        e.stopPropagation();
        console.log(e.currentTarget.style.background);
    }
)