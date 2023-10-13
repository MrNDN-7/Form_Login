$(document).ready(function () {
    // Ẩn form đăng ký ban đầu
    $("#form-register").hide();

    //người dùng nhấn nút "Đăng nhập"
    $("#switchToLogin").click(function () {
        $("#form-register").show();
        $("#form-login").hide();
    });

    //người dùng nhấn nút "Đăng ký"
    $("#switchToSignUp").click(function () {
        $("#form-login").show();
        $("#form-register").hide();
    });
});
$(document).ready(function () {

    
    //Jquery Validation Form Login
    $("#form-login").validate({
        rules: {
            loginName: "required",
            loginPassword: "required"
        },
        messages: {
            loginName: "Please enter your full name",
            loginPassword: "Please enter your password"
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.next(".error-message"));
        },
        submitHandler: function (form) {
            alert("Đăng nhập thành công");
            // Thực hiện các hành động cần thiết sau khi đăng nhập thành công, sau đó có thể gửi form bằng cách sử dụng form.submit()
            form.submit();
        }
        
    });
    
    //Jquery Validation Form Register 
    $("#form-register").validate({
        rules: {
            registerName: "required",
            registerPassword: {
                required: true,
                minlength: 6
            },
            confirmPassword: {
                required: true,
                minlength: 6,
                equalTo: "#registerPassword"
            },
            registerEmail: {
                required: true,
                email: true
            },
            gender: 
            {
                required: true,
            }
        },
        messages: {
            registerName: "Please enter your full name",
            registerPassword: {
                required: "Please enter a password",
                minlength: "Password must be at least 6 characters long"
            },
            confirmPassword: {
                required: "Please enter confirm password",
                minlength: "Confirm password must be at least 6 characters long",
                equalTo: "Passwords do not match"
            },
            registerEmail: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            gender: "Please select your gender"
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.next(".error-message"));
        },
        submitHandler: function (form) {
            alert("Đăng kí thành công");
            // Thực hiện các hành động cần thiết sau khi đăng nhập thành công, sau đó có thể gửi form bằng cách sử dụng form.submit()
            form.submit();
        }
    });

    //Registerpassword
    var myInputregister = document.getElementById("registerPassword");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    myInputregister.onfocus = function() {
    document.getElementById("messageregister").style.display = "block";
    }

    
    myInputregister.onblur = function() {
    document.getElementById("messageregister").style.display = "none";
    }

    
    myInputregister.onkeyup = function() {

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInputregister.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInputregister.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInputregister.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    
    // Validate length
    if(myInputregister.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
    }

    //Confirmpassword
    var myInputregister = document.getElementById("registerPassword");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var confirmMessage = document.getElementById("confirmMessage");

    confirmPasswordInput.onfocus = function() {
        confirmMessage.style.display = "block";
    };

    confirmPasswordInput.onblur = function() {
        confirmMessage.style.display = "none";
    };

    confirmPasswordInput.onkeyup = function() {
        var password = myInputregister.value;
        var confirmPassword = confirmPasswordInput.value;

        if (password === confirmPassword) {
            confirmMessage.classList.remove("invalid");
            confirmMessage.classList.add("valid");
            confirmMessage.textContent = "Passwords match";
        } else {
            confirmMessage.classList.remove("valid");
            confirmMessage.classList.add("invalid");
            confirmMessage.textContent = "Passwords do not match";
        }
    };


    //Email 
    var emailAddress = document.getElementById("registerEmail");
    emailAddress.onfocus= function () {
    document.getElementById("emailMessage").style.display = "block";
    };
    emailAddress.onblur = function () {
    document.getElementById("emailMessage").style.display = "none";
    };
    emailAddress.onkeyup = function () {
    const emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailAddressValue = document.getElementById("registerEmail").value;
    if (emailRegex.test(emailAddressValue)) {
        document.getElementById("emailMessage").style.color = "green";
        document.getElementById("emailMessage").classList.remove("invalid");
        document.getElementById("emailMessage").classList.add("valid");
        document.getElementById("emailMessage").innerHTML = "Valid Email Address";
    } else {
        document.getElementById("emailMessage").style.color = "red";
        document.getElementById("emailMessage").classList.remove("valid");
        document.getElementById("emailMessage").classList.add("invalid");
        document.getElementById("emailMessage").innerHTML = "Invalid Email Address";
    }
};
});
