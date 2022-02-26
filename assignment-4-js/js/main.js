// varsRegest
var registration = document.getElementById("registration");
let userName = document.getElementById("registrationUser");
let userPassword = document.getElementById("registrationPassword");
let butRegistration = document.getElementById("butRegistration");
var IhaveAccoiunt = document.getElementById("IhaveAccoiunt");
var YouhaveAccount = document.getElementById("YouhaveAccount");

// varsLogin
var login = document.getElementById("login");
let loginUser = document.getElementById("loginUser");
let loginPassword = document.getElementById("loginPassword");
let buttonLogin = document.getElementById("buttonLogin");
let errorLogin = document.getElementById("errorLogin");
let createAccount = document.getElementById("createAccount");

// varsLogout
let buttonLogout = document.getElementById("buttonLogout");
let haveAcco = document.getElementById("error");

// varsHome
var Home = document.getElementById("Home");
var userContainer;




///////////////

if (localStorage.getItem("userAcount") == null) {
    userContainer = [];
}
else {
    userContainer = JSON.parse(localStorage.getItem("userAcount"))
}

///////////////
function AddUser() {
    if (validName() && validPass()) {
        
        if (checkuser() == true) {
            checkuser()
        }
        else {
            var users = {
                name: userName.value,
                pass: userPassword.value
            }
            userContainer.push(users)
            localStorage.setItem("userAcount", JSON.stringify(userContainer))
            clearValue()
            loginPage()
            
        }
    }
    
    
}

butRegistration.addEventListener("click", AddUser)
////////

function checkuser() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userName.value == userContainer[i].name) {
            YouhaveAccount.style.display = "block";
            return true
        }

    }
}


//////////
createAccount.addEventListener("click", function () {
    login.style.display = "none"
    registration.style.display = "block"
    errorLogin.style.display="none"
})


//////////////


//////////
function clearValue() {
    userName.value = ""
    userPassword.value = ""
}
////////////


function loginPage() {
    registration.style.display = "none"
    login.style.display = "block"
}
/////////////



// login Function
buttonLogin.addEventListener("click", submet)
function submet() {
    for (let index = 0; index < userContainer.length; index++) {
        if (loginUser.value == userContainer[index].name && loginPassword.value == userContainer[index].pass ) {
            login.style.display = "none"
            Home.style.display = "block"
            clearValueSubmet()
        }
        else if(loginUser.value == userContainer[index].name && loginPassword.value !== userContainer[index].pass ){
            document.getElementById("passErroe").style.display="block"

        }
        else if(loginUser.value == "" || loginPassword.value == ""){
        document.getElementById("NotVall").style.display="block"
        }
        else {
            errorLogin.style.display = "block"

        }
    }
}


function clearValueSubmet() {
    loginUser.value = ""
    loginPassword.value = ""

}

///////////
IhaveAccoiunt.addEventListener("click", function () {
    registration.style.display = "none";
    login.style.display = "block"
})



///////////
buttonLogout.addEventListener("click", logaout)
function logaout() {
    Home.style.display = "none";
    login.style.display = "block";

}


// valedatinName
function validName() {
    let regexName = /^[A-Z]{1}[a-z]{4,14}$/;
    if (regexName.test(userName.value)) {
        document.getElementById("regxName").style.display = "none"
        return true
    }
    else {
        document.getElementById("regxName").style.display = "block"
        return false
    }
}

// valedatinPass
function validPass() {
    let regexPass = /^[0-9]{6,20}$/;
    if (regexPass.test(userPassword.value)) {
        document.getElementById("regxPass").style.display = "none"
        return true
    }
    else {
        document.getElementById("regxPass").style.display = "block"
        return false
    }
}

// Anemat Background

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function () {
    console.log('callback - particles.js config loaded');
});


// Anemat registration
var typed = new Typed('.element', {
    strings: ["Smart Login System " ,"Smart Login System "],
    typeSpeed: 100,
    startDelay: 20,
    backSpeed: 100,
});
// Anemat login

var typed = new Typed('.ele-2', {
    strings: ["Welcome To The Login Page " ,"Welcome To The Login Page"],
    typeSpeed: 100,
    startDelay: 20,
    backSpeed: 100,
});

