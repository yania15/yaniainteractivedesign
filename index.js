function changeImage() {
  var img = document.getElementById('myImage');
  if (img.src.match("image1.jpg")) {
    img.src = "sitches2.png";
  } else {
    img.src = "jeanhole.png";
  }

}
const helvetica4 = document.getElementById("helvetica4");
const xray = document.getElementById("xray");

document.addEventListener("mousemove", (e) => {
  const rect = xray.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;


  const r = 100; // 

  // update mask
  helvetica4.style.clipPath = `circle(${r}px at ${x}px ${y}px)`;
});

const mars = document.getElementById("mars");
const container = document.getElementById("container");

document.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();

  // cursor position relative to image
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // size of the reveal circle
  const r = 100; // <-- change radius here

  // update mask
  mars.style.clipPath = `circle(${r}px at ${x}px ${y}px)`;
});