window.onload = function() {
    let img = document.getElementById("yuhongliu");
    img.addEventListener("click",sayHello);
    let ex = document.getElementById("expereince-section");
    ex.addEventListener("click",enlargeEl);
}

var times = 0;
const sayHello = (event) => {
    //alert("Hello!");
    let newHello = document.createElement("h3");
    times++;
    newHello.innerHTML = "Hello everyone " + times;
    newHello.id = "Hello" + times;
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    newHello.style.color = `rgb(${red},${green},${blue})`;
    let target = event.currentTarget;
    document.body.insertBefore(newHello, target);
    if(times > 1) {
        let a = "Hello" + (times - 1);
        let deleteElement = document.getElementById(a);
        deleteElement.remove();
    }
}
const enlargeEl = (event) => {
    let target = event.currentTarget;
    if(target.classList.contains("enlarge")) {
        target.classList.remove("enlarge");
    } else {
        target.classList.add("enlarge");
    }
}