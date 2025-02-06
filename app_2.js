let inputValid = () => {
    var username = document.getElementById('name');
    if (username.value.length < 3) {
        username.nextElementSibling.innerText = 'atleast 3 char required'
        username.nextElementSibling.style.display = 'block'
        return;
    }
    username.nextElementSibling.style.display = 'none';
    
}
// inputValid();
let checkPass = () => {
    
    var password = document.getElementById('password');
    if (password.value.length < 6) {
        password.nextElementSibling.innerText = ' password should be atleast 6 chars'
        password.nextElementSibling.style.display = 'block'
        return;
    }
    password.nextElementSibling.style.display = 'none'
}
let checkphoneNo = () => {
    
    var phoneNo = document.getElementById('phoneNo');
    if (phoneNo.value.length < 11) {
        phoneNo.nextElementSibling.innerText = ' phoneNo should be atleast  11 No'
        phoneNo.nextElementSibling.style.display = 'block'
        return;
    }
    phoneNo.nextElementSibling.style.display = 'none'
}

let checkEmail = () => {
    
    var useremail = document.getElementById("email");
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if (!useremail.value.match(regex)) {
        // emailSp.innerText = "Invalid Email";
        useremail.nextElementSibling.innerText ="Invalid Email";
        useremail.nextElementSibling.style.display = 'block' ;
        return;
        
    }
    if (useremail.value.match(regex)) {
        useremail.nextElementSibling.style.display = 'none' ;
    }
}