const canvas = document.querySelector(".paint");
const erase = document.querySelector(".erase");
const ctx = canvas.getContext("2d");
let currentColor;
let currentSize = "10";

document.querySelector(".color").oninput = function () {
    currentColor = this.value;
};
document.querySelector(".size").oninput = function () {
    currentSize = this.value;
};


canvas.onmousedown = function (e) {
    canvas.onmousemove = function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        ctx.fillRect(x, y, currentSize, currentSize);
        ctx.fillStyle = currentColor;
        ctx.fill();

    }
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
}

erase.onclick = function (e) {
    canvas.onmousemove = function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        ctx.clearRect(x, y, currentSize, currentSize);

    }
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
}





