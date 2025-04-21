function myFunction() {
  var x = document.getElementById("myLinks");
  var topnav = document.querySelector(".topnav");

  if (x.style.display === "block") {
    x.style.display = "none";
    topnav.classList.remove("responsive");
  } else {
    x.style.display = "block";
    topnav.classList.add("responsive");
  }
}
