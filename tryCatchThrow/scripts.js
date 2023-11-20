function myFunction() {
  const message = document.getElementById("pawn");
  message.innerHTML = "";
  let x = document.getElementById("inputText").value;
  try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (error) {
    message.innerHTML = `Input is ${error}`;
  }
}
