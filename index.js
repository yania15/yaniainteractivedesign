function changeImage() {
  var img = document.getElementById('myImage');
  const label = document.getElementById("stitchesLabel");

  if (img && img.src.includes("sitches2.png")) {
    img.src = "jeanhole.png";
  } else if (img) {
    img.src = "sitches2.png";
  }

  if (label) label.classList.remove("hidden");

}
const helvetica4 = document.getElementById("helvetica4");
const xray = document.getElementById("xray");
