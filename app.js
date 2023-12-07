// app.js
document.querySelector('.search').addEventListener('click', function() {
    alert('Afroflix Search functionality is not implemented yet.');
});




function validated(){
    if(email.value.length <10  ) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length <= 6) {
        password.style.border = "1px solid green";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
   
}
function email_Verify(){
    if (email.value.length>=8){
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function pass_Verify(){
    if (password.value.length>=6){
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}