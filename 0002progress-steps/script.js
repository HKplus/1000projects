const progress = document.querySelector("#progress-line");
let circles = document.querySelectorAll("#circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const box = document.querySelector("#progress");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");

let position = 1;

prev.addEventListener("click", () => {
	position--;

	if (position < 1) position = 1;
	update();
});

next.addEventListener("click", () => {
	position++;
	if (position > circles.length) position = circles.length;
	update();
});

add.addEventListener("click", () => {
	if (circles.length < 7) {
		const addClick = document.createElement("div");
		addClick.id = "circle";
		addClick.className = "circle";
		addClick.textContent = circles.length + 1;
		box.append(addClick);
		change();
		update();
	}
});

remove.addEventListener("click", () => {
	const lastCircle = document.querySelector("#circle:last-of-type");
	box.removeChild(lastCircle);
	change();
	update();
});

function update() {
	circles.forEach((circle, index) => {
		if (index < position) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	const activeCircle = document.querySelectorAll(".active");

	progress.style.width =
		((activeCircle.length - 1) / (circles.length - 1)) * 100 + "%";

	if (position == 1) {
		prev.disabled = true;
	} else if (position == circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}

	if (circles.length == 3) {
		remove.disabled = true;
	} else if (circles.length == 7) {
		add.disabled = true;
	} else {
		remove.disabled = false;
		add.disabled = false;
	}
}

function change() {
	circles = document.querySelectorAll("#circle");
	if (position > circle.length) {
		position = circles.length;
	}
}
