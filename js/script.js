const mobile_device = document.querySelector("#mobile_device");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

const openClick = () => {
  console.log("click");
  mobile_device.style.left = "0px";
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
};

const closeClick = () => {
  mobile_device.style.left = "-900px";
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
};
