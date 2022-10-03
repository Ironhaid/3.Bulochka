const button1 = document.getElementById("button2");
button1.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("form").innerHTML = "<h3>Спасибо!</h3> <br> <h3>Мы перезвоним в течение 15 минут, чтобы уточнить ваши пожелания</h3>";
}
