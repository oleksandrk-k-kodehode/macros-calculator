const form = document.getElementById("my_form");

form.addEventListener("input", update_data);
form.addEventListener("change", update_data);

const trans_fat = 0;
const cholesterol = 250;
const sodium = 2000;
const added_sugars = 7;
const calcium = 1150;
const potassium = 4000;
const vitamin_d = 800;
const sugar = 80;

var activity_dict = {
    sedentary: 1.2,
    light_activity: 1.375,
    moderate: 1.55,
    very_active: 1.725,
    athlete: 1.9,
};

var goal_dict = {
    gain: 400,
    maintain: 0,
    lose: -400,
};

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
    return bmr * activity_dict[activity];
}

function proteins(weight) {
    return Math.round(weight * 2.0);
}
function fats(weight) {
    return Math.round(weight * 0.8);
}
function carbs(weight, tdee) {
    return Math.round(tdee - (proteins(weight) + fats(weight)));
}
function fibers(tdee) {
    // 14g per 1000kcal
    return Math.round((tdee / 1000) * 14);
}
function saturated_fats(tdee) {
    // <10% of the total calories
    return Math.round(tdee * 0.09);
}
function irons(sex) {
    let daily_iron = 0;
    switch (sex) {
        case "man":
            daily_iron = 8;
            break;
        case "woman":
            daily_iron = 18;
            break;
    }
    return daily_iron;
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
    let goal = goal_dict[input_data.goal];
    let res_cal_nom = Math.round(tdee_value + goal);
    let res_cal_per = Math.round(res_cal_nom / 3);
    let protein = proteins(input_data.weight);
    let fat = fats(input_data.weight);
    let saturated = saturated_fats(tdee_value);
    let carb = carbs(input_data.weight, tdee_value);
    let iron = irons(input_data.sex);
    let fiber = fibers(tdee_value);

    document.getElementById("calories_nom").textContent = res_cal_nom;
    document.getElementById("calories_per").textContent = res_cal_per;
    document.getElementById("total_fat_nom").textContent = fat;
    document.getElementById("total_fat_per").textContent = Math.round(fat / 3);
    document.getElementById("saturated_fat_nom").textContent = saturated;
    document.getElementById("saturated_fat_per").textContent = Math.round(
        saturated / 3,
    );
    document.getElementById("trans_fat_nom").textContent = trans_fat;
    document.getElementById("trans_fat_per").textContent = Math.round(
        trans_fat / 3,
    );
    document.getElementById("cholesterol_nom").textContent = cholesterol;
    document.getElementById("cholesterol_per").textContent = Math.round(
        cholesterol / 3,
    );
    document.getElementById("sodium_nom").textContent = sodium;
    document.getElementById("sodium_per").textContent = Math.round(sodium / 3);
    document.getElementById("total_carb_nom").textContent = carb;
    document.getElementById("total_carb_per").textContent = Math.round(
        carb / 3,
    );
    document.getElementById("dietary_fiber_nom").textContent = fiber;
    document.getElementById("dietary_fiber_per").textContent = Math.round(
        fiber / 3,
    );
    document.getElementById("total_sugars_nom").textContent = sugar;
    document.getElementById("total_sugars_per").textContent = Math.round(
        sugar / 3,
    );
    document.getElementById("inc_add_sugars_nom").textContent = added_sugars;
    document.getElementById("inc_add_sugars_per").textContent = Math.round(
        added_sugars / 3,
    );
    document.getElementById("protein_nom").textContent = protein;
    document.getElementById("protein_per").textContent = Math.round(
        protein / 3,
    );
    document.getElementById("vitamin_d_nom").textContent = vitamin_d;
    document.getElementById("vitamin_d_per").textContent = Math.round(
        vitamin_d / 3,
    );
    document.getElementById("calcium_nom").textContent = calcium;
    document.getElementById("calcium_per").textContent = Math.round(
        calcium / 3,
    );
    document.getElementById("iron_nom").textContent = iron;
    document.getElementById("iron_per").textContent = Math.round(iron / 3);
    document.getElementById("potassium_nom").textContent = potassium;
    document.getElementById("potassium_per").textContent = Math.round(
        potassium / 3,
    );
}
main();
