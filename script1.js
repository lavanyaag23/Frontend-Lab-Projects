let btn1 = document.querySelector("#btn1");

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
};

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.currentTarget);
    console.log(evt.clientX);
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
};