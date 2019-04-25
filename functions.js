
function passwordcheck() {
    var input = document.getElementById("newpassword");
    var string = document.getElementById("newpassword").value;
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var numcheck = false;
    var lettercheck = false;

    if(string.length == 0){
        error1.style.visibility = "hidden";
        error2.style.visibility = "hidden";
    }
   else  if(string.length < 8){
         error1.style.visibility = "visible";

    }
    else{
        error1.style.visibility = "hidden";
        error2.style.visibility = "hidden";
    }

}
function reapetpasswordcheck() {
    var string = document.getElementById("newpassword").value;
    var string2 = document.getElementById("newpassword_r").value;
    var p1 = document.getElementById("newpassword");
    var p2 = document.getElementById("newpassword_r");
    var error3 = document.getElementById("error3");
    if( string2.length == 0 || string.length ==0){
        error3.style.visibility = "hidden";
    }
   else  if(string != string2){
       error3.style.visibility = "visible";
    }
    else{
        error3.style.visibility= "hidden";
    }

}