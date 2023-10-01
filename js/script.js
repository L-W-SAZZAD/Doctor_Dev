const mobile_device = document.querySelector("#mobile_device");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

const openClick = () => {
  console.log("click");
  mobile_device.style.top = "65.2px";
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
};

const closeClick = () => {
  mobile_device.style.top = "-999px";
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
};
