let menu_btn = document.querySelector(".menu"),
  menu_list = document.getElementById("bar");

menu_btn.onclick = function () {
  menu_list.classList.toggle("show");
  menu_btn.classList.toggle("fa-times");
};

var header = document.querySelector(".wait-typing"),
  content = header.textContent;

var i = 0;
header.textContent = "";
var typeWriter = setInterval(function () {
  header.textContent += content[i];
  i++;
  if (i > content.length - 1) clearInterval(typeWriter);
}, 500);
