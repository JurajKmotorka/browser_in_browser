const loginBtn = document.querySelector("#loginBtn");
const wrapper = document.querySelector("#wrapper");
const login = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  wrapper.style.display = "block";
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
const target = document.getElementById("wrapper");

function dragStart(e) {
  if (e.target !== target) {
    return;
  }

  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === wrapper) {
    isDragging = true;
  }
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
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}
