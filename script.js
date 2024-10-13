function Validation() {
  let age = document.getElementById("age").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (age == "" || name == "" || email == " ") {
    alert("Please fill up the mandatory fields");
  } else if (age < 20) {
    alert("Age must greater than 20 years");
  }
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) && email !== "") {
    alert("Please enter a valid email address");
  }
}
