function passwordcheck() {
    var input = document.getElementById("psw");
    var string = document.getElementById("psw").value;
    var error1 = document.getElementById("error1");

    if(string.length < 8) {
        error1.style.visibility = "visible";
    }else{
        error1.style.visibility = "hidden";
    }
}
function reapetpasswordcheck() {
    var input1 = document.getElementById("psw");
    var string1 = document.getElementById("psw").value;
    var input2 = document.getElementById("psw-repeat");
    var string2 = document.getElementById("psw-repeat").value;
    var error2 = document.getElementById("error2");

    if(string1===string2) {
        error2.style.visibility = "hidden";
    }else{
        error2.style.visibility = "visible";
    }

}
