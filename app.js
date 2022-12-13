const fname= document.querySelector("#fname")
const fnameErrorIcon= document.querySelector("#fname_errorIcon")
const fnameErrorMsg= document.querySelector("#fname_errorMsg")
const lname= document.querySelector("#lname")
const lnameErrorIcon= document.querySelector("#lname_errorIcon")
const lnameErrorMsg= document.querySelector("#lname_errorMsg")
const email= document.querySelector("#email")
const emailErrorIcon= document.querySelector("#email_errorIcon")
const emailErrorMsg= document.querySelector("#email_errorMsg")
const password= document.querySelector("#password")
const passwordErrorIcon= document.querySelector("#password_errorIcon")
const passwordErrorMsg= document.querySelector("#password_errorMsg")
const submitBtn= document.querySelector("#submitBtn")
const validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

submitBtn.addEventListener("click", ()=>{
    if(fname.value===""){
        fnameErrorMsg.style.color="red";
        fnameErrorIcon.style.display="block"
    }else if(fname.value!=="") {
        fnameErrorMsg.style.color="white";
        fnameErrorIcon.style.display="none"
    }
    if(lname.value===""){
        lnameErrorMsg.style.color="red";
        lnameErrorIcon.style.display="block"
    }else if(lname.value!=="") {
        lnameErrorMsg.style.color="white";
        lnameErrorIcon.style.display="none"
    }
    if(password.value===""){
        passwordErrorMsg.style.color="red";
        passwordErrorIcon.style.display="block"
    }else if(password.value!=="") {
        passwordErrorMsg.style.color="white";
        passwordErrorIcon.style.display="none"
    }
    if(email.value.match(validEmail)){
        emailErrorMsg.style.color="white";
        emailErrorIcon.style.display="none"
    }else if(!email.value.match(validEmail)){
        emailErrorMsg.style.color="red";
        emailErrorIcon.style.display="block"
    }
})
