
const hambarger   =  document.getElementById("hambarger");
const mobile_menu =  document.getElementById("mobile_menu");
const menu_open   =  document.getElementsByClassName("menu_open");
const menu_close  =  document.getElementsByClassName("menu_close");

menu_open[0].addEventListener("click",() =>{
  console.log("rinhgg.");
  mobile_menu.style.top = "0";
  menu_open[0].style.display = "none";
  menu_close[0].style.display = "block";
})

menu_close[0].addEventListener("click",() =>{
  mobile_menu.style.top = "-100%";
  menu_open[0].style.display = "block";
  menu_close[0].style.display = "none";
})