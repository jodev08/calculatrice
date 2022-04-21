const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

//ecrire le chiffre dans la cas blanche
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

//signe egale
equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

//clear (C)
clear.addEventListener("click", () => {
  result.textContent = "";
});

//https://www.youtube.com/watch?v=6q-zt0aQ74U&t=8007s
