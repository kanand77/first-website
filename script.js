document.body.onkeyup = function(event) {
  console.log(event.keyCode);
  if (event.keyCode == 75) {
    // change the class of body to dark mode
    document.body.classList .toggle("dark");
  }
}