function getData() {
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const acitivity_level = document.querySelector(
    "input[name='activity_level']:checked",
  ).value;
  const goals = document.querySelector("input[name='goal']:checked").value;
}
