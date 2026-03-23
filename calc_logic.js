const form = document.getElementById("my_form");

form.addEventListener("input", update_data);
form.addEventListener("change", update_data);

function update_data() {
  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());
  return obj;
}
