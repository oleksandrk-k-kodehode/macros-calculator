const form = document.getElementById("my_form");

form.addEventListener("input", update_data);
form.addEventListener("change", update_data);

function update_data() {
  let data = new FormData(form);
  let obj = Object.fromEntries(data.entries());
  console.log(obj);
  return obj;
}

function bmr(sex, age, height, weight) {
  // W = weight (kg)
  // H = height (cm)
  // A = age (years)

  // BMR=10W+6.25H−5A+5
  if (sex == "man") {
    console.log(10 * weight + 6.25 * height - 5 * age + 5);
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  // BMR=10W+6.25H−5A−161
  else {
    console.log(10 * weight + 6.25 * height - 5 * age - 161);
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}

function tdee(bmr, activity) {
  // TDEE=BMR×Activity Level
  /*
    Sedentary (little/no exercise): × 1.2
    Light activity (1–3 days/week): × 1.375
    Moderate (3–5 days/week): × 1.55
    Very active (6–7 days/week): × 1.725
    Athlete/manual labor: × 1.9
  */

  let act_coef = {
    sedentary: 1.2,
    light_activity: 1.375,
    moderate: 1.55,
    very_active: 1.725,
    athlete: 1.9,
  };
  console.log(bmr * act_coef[activity]);
  return bmr * act_coef[activity];
}

function main() {
  let input_data = update_data();
  let bmr_value = bmr(
    input_data.sex,
    input_data.age,
    input_data.height,
    input_data.weight,
  );
  let tdee_value = tdee(bmr_value, input_data.activity_level);

  document.getElementById("calories_nom").textContent = tdee_value;
}
main();
