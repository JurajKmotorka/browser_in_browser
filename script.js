const loginBtn = document.querySelector("#loginBtn");
const wrapper = document.querySelector(".wrapper");
const login = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  wrapper.style.display = "block";
  login.style.display = "none";
});

const modal = document.body;

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

modal.addEventListener("mousedown", dragStart);
modal.addEventListener("mouseup", dragEnd);
modal.addEventListener("mousemove", drag);

function dragStart(e) {
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

    setTranslate(currentX, currentY, modal);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}
