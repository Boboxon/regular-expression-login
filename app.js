const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\d\w@-]{8,20}$/i,

  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  //             yourname @ domain   .  com          ( .uk )
};

function valide(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    valide(e.target, patterns[e.target.attributes.name.value]);
  });
});
