const left = document.getElementById("left");
const right = document.getElementById("right");
const lists = document.querySelectorAll(".list");


for (let list of lists) {
    list.addEventListener('dragstart', function(e) {
        let selected = e.target;
        right.addEventListener("dragover", e => { e.preventDefault() });
        right.addEventListener('drop', e => {
            right.appendChild(selected);
            selected = null;
        })
        left.addEventListener("dragover", e => { e.preventDefault() });
        left.addEventListener('drop', e => {
            left.appendChild(selected);
            selected = null;
        })
    })
}
