function getData() {
  const acitivity_level = document.querySelector(
    'input[name="activity_level"]:checked',
  )?.value;
  const goals = document.querySelector('input[name="goal"]:checked')?.value;
  console.log(acitivity_level);
  console.log(goals);
}
getData();
