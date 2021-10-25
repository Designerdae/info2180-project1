/* Add your JavaScript to this file */
"use strict";
window.onload=function(){
    let sub_btn=document.getElementsByTagName("button")[0];
    let email_field=document.getElementById("email");
    let display_message=document.getElementsByClassName("message")[0];
    

    sub_btn.addEventListener("click", function(e){
        e.preventDefault();
        let email=email_field.value;
        if(email===""){
            display_message.textContent="Please enter a valid email address";  }

        else{display_message.textContent= `Thank you! Your email address ${email} has been added to our mailing list!`;
            email_field.value= " ";
                }
    
    })

}