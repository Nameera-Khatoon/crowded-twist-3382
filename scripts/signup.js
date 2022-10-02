let signup=document.querySelector("#signUp>form")
signup.addEventListener("submit",signup1)



function signup1(event){
    event.preventDefault()
    

    let email=document.querySelector("#email").value
    let phone=document.querySelector("#phone").value
    let pswd=document.querySelector("#pswd").value
    if(email==""|| phone==""||pswd==""){
        alert("please enter all the credentials")
    }else{
        localStorage.setItem("gmail",email);
        localStorage.setItem("phone no", phone);
        localStorage.setItem("password", pswd);  
        alert("sign Up successfull")
    }
    
}



// console.log(arr)



