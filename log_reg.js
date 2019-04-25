 function open_modal() {
        var modal = document.getElementById("Login_modal");
        modal.style.display = "block";
        modal.style.transition = "2s";

    }

    function close_modal() {
        var modal = document.getElementById("Login_modal");
        modal.style.display = "none";
    }

 function not_empty() {
    var go = true;
     var string2 = document.getElementById("pass").value;
     var string1 = document.getElementById("user_name").value;

     var error1 = document.getElementById("warn1");
     var error2 = document.getElementById("warn2");

     if(string1.length === 0) {
         error1.style.visibility = "visible";
         go=false;
     }else{
         error1.style.visibility = "hidden";
     }

     if(string2.length === 0) {
         error2.style.visibility = "visible";
         go = false;
     }else{
         error2.style.visibility = "hidden";
     }
     if(go === true){

         window.location.href = "editprofile.html";

     }
 }
