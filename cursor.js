/* Cursor */
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

const navLinks = document.querySelectorAll("a");
navLinks.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("expand");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("expand");
  });
});

let windowWidth = window.innerWidth;

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
});

const is_touch_enabled = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };
  
  if (is_touch_enabled()) {
    document.body.removeChild(cursor);
  }