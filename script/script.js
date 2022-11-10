const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let but1 = document.getElementsByClassName('start')
const canvas2 = document.getElementById('score');
const ctx2 = canvas2.getContext('2d')


const fruit = new Image();
const circle = new Image();
circle.src = "/img/circle.png"
fruit.src = "/img/frut.png";
fruit.height = 32;
circle.height = 32;
let frutSize = fruit.height;
let rezult = 0;
// ctx.font = "24px Arial";
// ctx.fillText("Hello", 0, 250)
console.log(fruit);
let max = 10;
let side;
let ar = [];
ar[0] = {
	x: Math.floor(Math.random() * max) * frutSize,
	y: Math.floor(Math.random() * max) * frutSize
};


document.addEventListener('keydown', (ev) => {
	switch (ev.keyCode) {
		case 38:
			if (side != "down") {
				side = "up";
			}
			break;
		case 37:
			if (side != "right") {
				side = "left";
			}
			break;

		case 39:
			if (side != "left") {
				side = "right";
			}
			break;

		case 40:
			if (side != "up") {
				side = "down";
			}
			break;

	}
})


let fruitRand = {
	x: Math.floor(Math.random() * max) * frutSize,
	y: Math.floor(Math.random() * max) * frutSize
}
let circleRand = {
	x: Math.floor(Math.random() * max) * circle.height,
	y: Math.floor(Math.random() * max) * circle.height
}
function startGame() {
	side = '';
	rezult = 0;
	circleRand.x = Math.floor(Math.random() * max) * frutSize;
	circleRand.y = Math.floor(Math.random() * max) * frutSize;
	delete ar;
	ar[0] = {
		x: Math.floor(Math.random() * max) * frutSize,
		y: Math.floor(Math.random() * max) * frutSize
	};
}




// if (arX > canvas.width) arX = 0;
// if (arX < 0) arX = canvas.width - frutSize;
// if (arY > canvas.height) arY = 0;
// if (arY < 0) arY = canvas.height - frutSize;



function drawImg() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(circle, circleRand.x, circleRand.y);
	let arX = ar[0].x;
	let arY = ar[0].y;

	if (side == "up") arY -= 32;
	else if (side == "down") arY += 32;
	else if (side == "right") arX += 32;
	else if (side == "left") arX -= 32;
	if (arX > canvas.width) arX = 0;
	if (arX < 0) arX = canvas.width - frutSize;
	if (arY > canvas.height) arY = 0;
	if (arY < 0) arY = canvas.height - frutSize;
	let newFruit = {
		x: arX,
		y: arY
	};
	if (arX == circleRand.x && arY == circleRand.y) {

		circleRand.x = Math.floor(Math.random() * max) * frutSize;
		circleRand.y = Math.floor(Math.random() * max) * frutSize;
		rezult++;
	}
	else ar.pop();
	ar.unshift(newFruit);
	ctx2.font = "24px Arial";
	ctx2.fillText("score: " + rezult, 0, 24)
	for (let i = 0; i < ar.length; i++) {
		ctx.drawImage(fruit, ar[i].x, ar[i].y);
	}
}
let dr = setInterval(drawImg, 500);




