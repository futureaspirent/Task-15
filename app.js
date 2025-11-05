const password = document.getElementById("password");
    const rePassword = document.getElementById("rePassword");
    const checkBtn = document.getElementById("checkBtn");
    const message = document.getElementById("message");
    const strengthMsg = document.getElementById("strengthMsg");

    // Auto show password when focused, hide when blurred
    function autoToggle(input) {
      input.addEventListener("focus", () => input.type = "text");
      input.addEventListener("blur", () => input.type = "password");
    }

    autoToggle(password);
    autoToggle(rePassword);

    
    checkBtn.addEventListener("click", () => {
      if (password.value === "" || rePassword.value === "") {
        message.textContent = "Please enter both fields!";
        message.style.color = "red";
      } else if (password.value === rePassword.value) {
        message.textContent = "Passwords match!";
        message.style.color = "green";
      } else {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
      }
    });

    
    password.addEventListener("input", () => {
      const val = password.value;

      if (val.length === 0) {
        strengthMsg.textContent = "";
        strengthMsg.className = "";
      } else if (val.length < 6) {
        strengthMsg.textContent = "Strength: Weak";
        strengthMsg.className = "weak";
      } else if (val.match(/[A-Za-z]/) && val.match(/[0-9]/)) {
        strengthMsg.textContent = "Strength: Medium";
        strengthMsg.className = "medium";
      }
      if (val.match(/[A-Z]/) && val.match(/[0-9]/) && val.match(/[^A-Za-z0-9]/) && val.length >= 8) {
        strengthMsg.textContent = "Strength: Strong";
        strengthMsg.className = "strong";
      }

    });
