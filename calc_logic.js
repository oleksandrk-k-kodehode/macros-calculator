const form = document.getElementById("my_form");

form.addEventListener("input", update_data);
form.addEventListener("change", update_data);

function update_data() {
  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());
  return obj;
}

function bmr(sex, age, height, weight) {
  // W = weight (kg)
  // H = height (cm)
  // A = age (years)

  // BMR=10W+6.25H−5A+5
  if ((sex = man)) {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  // BMR=10W+6.25H−5A−161
  else {
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
}
