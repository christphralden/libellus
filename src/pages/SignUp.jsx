import './SignUp.css'
export default function SignUp(){

    function validateForm(event) {
        event.preventDefault(); 
      
        var alertMessage = document.getElementById("alert-message");
        var nameInput = document.getElementById("name-input");
        var passwordInput = document.getElementById("password-input");
        var confirmPasswordInput = document.getElementById("confirm-password-input");
        var dateInput = document.getElementById("date-input");
        var genderSelect = document.getElementById("gender-select");
        var agreeCheckbox = document.getElementById("agree-checkbox");
    
    
        if (nameInput.value === "") {
          alertMessage.innerText = "Email must be filled in.";
          return false;
        }
    
        if (!/\S+@\S+\.\S+/.test(nameInput.value)) {
          alertMessage.innerText = "Email must be a valid Gmail address.";
          return false;
        }
    
        if (passwordInput.value === "") {
          alertMessage.innerText = "Password must be filled in.";
          return false;
        }
        
        if (!/\d/.test(passwordInput.value)) {
          alertMessage.innerText = "Passwords must contain numbers.";
          return false;
        }
        
        if (confirmPasswordInput.value !== passwordInput.value) {
          alertMessage.innerText = "Confirm Password must be the same as Password.";
          return false;
        }
        
        if (dateInput.value === "") {
          alertMessage.innerText = "Date must be filled in.";
          return false;
        }
        
        if (genderSelect.value !== "male" && genderSelect.value !== "female") {
          alertMessage.innerText = "Gender must be selected between Male or Female.";
          return false;
        }
        
        if (!agreeCheckbox.checked) {
          alertMessage.innerText = "You must agree to the Terms of Service & Privacy Policy.";
          return false;
        }
        
    
        window.location.href = "movies-page.html";
      }
      
    return(
        <div className="banner">
            <div className="gradient"></div>
            <div className="rectangle">
                <div className="register">
                    <div className="register-title">Register</div>
                    <form className="register-form" onSubmit={validateForm}>
                    <div className="inputod">
                        <input type="text" id="name-input" placeholder="Email"/>
                        <input type="password" id="password-input" placeholder="Password"/>
                        <input type="password" id="confirm-password-input" placeholder="Confirm Password"/>
                        <input type="date" id="date-input" placeholder="Date Of Birth"/>
                        <select name="gender" id="gender-select">
                        <option value="gender" hidden>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </select>
                    </div>
                    <label htmlFor="agree-checkbox">
                        <input type="checkbox" id="agree-checkbox" className="checkbox-input" />
                        <span className="checkbox-text">I have read and agree to the Terms of Service & Privacy Policy</span>
                    </label>
                    <button type="submit">Register</button>
                    </form>
                </div>
            <div className="msg" id="alert-message"></div>
            </div>
      </div>
    );
}

