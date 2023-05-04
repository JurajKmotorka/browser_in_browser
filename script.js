const loginBtn = document.querySelector("#loginBtn");
const modal = document.querySelector("#modal");
const login = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  modal.style.display = "block";
  login.style.display = "none";
});

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

document.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragEnd);
document.addEventListener("mousemove", drag);

// Get a reference to the target element
const target = document.getElementById("modal");

function dragStart(e) {
  if (!target.contains(e.target)) {
    return;
  }

  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  isDragging = true;
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();

    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, target);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate(${xPos}px, ${yPos}px)`;
}
