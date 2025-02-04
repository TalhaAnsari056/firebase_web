
import { createUserWithEmailAndPassword ,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth, db,provider } from "./firebaseSetup.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

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
    if (password.value.length < 5) {
        password.nextElementSibling.innerText = ' password should be of 5 chars'
        password.nextElementSibling.style.display = 'block'
        return;
    }
    password.nextElementSibling.style.display = 'none'
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
// export {inputValid,checkEmail,checkPass}


let pushUserData = async (user) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {

            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
            phoneNumber: user.phoneNumber,
            uid: user.uid,
        });
        console.log('document Id', docRef.id);
    } catch (e) {
        console.error("data pushing error", e)
    }
}

let userSignUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("userData", user);
            pushUserData(user).then(() => {
                window.location.replace("./pages/dashboard/dashboard.html");
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            console.error(errorCode);
        });
}


document.querySelector("#signUp-btn").addEventListener("click", () => {
    let emailValue = document.querySelector("#email").value;
    let passwordValue = document.querySelector("#password").value;

    userSignUp(emailValue, passwordValue);
});

/// signup with google
document.querySelector("#google-signUp").addEventListener('click',()=>{
    signInWithPopup(auth, provider)
      .then(async(result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        pushUserData(user).then(() => {
                window.location.replace("./pages/dashboard/dashboard.html");
            });
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.error(errorMessage,errorCode,email,credential);
      });
  })
