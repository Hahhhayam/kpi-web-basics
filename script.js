addEventListener("DOMContentLoaded", () => {
    const variant = document.getElementById("variant");
    variant.onclick = select;

    const next = document.querySelector("#next");
    next.onclick = select;

    let images = document.getElementById("images");
    regButton("add", () => add(images));
    regButton("in", () => zoomIn(images));
    regButton("out", () => zoomOut(images));
    regButton("remove", () => remove(images));
});

function select(event) {
    if (event.target.classList.contains("selected")) {
        event.target.classList.remove("selected");
        return;
    }
    event.target.classList.add("selected");
}

function regButton(id, action) {
    const button = document.getElementById(id);
    button.onclick = action;
}

function add(images) {
    images.innerHTML += "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Myru_Square_in_Kramatorsk.jpg/1200px-Myru_Square_in_Kramatorsk.jpg\" alt=\"Фото Краматорськ\">";
}

function zoomIn(images) {
    const lastImage = images.lastElementChild
    if (lastImage.classList.contains("zoom-out")) {
        lastImage.classList.remove("zoom-out");
        return;
    }
    lastImage.classList.add("zoom-in");
}

function zoomOut(images) {
    const lastImage = images.lastElementChild
    if (lastImage.classList.contains("zoom-in")) {
        lastImage.classList.remove("zoom-in");
        return;
    }
    lastImage.classList.add("zoom-out");
}

function remove(images) {
    images.removeChild(images.lastElementChild);
}


