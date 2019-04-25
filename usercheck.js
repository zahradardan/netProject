$(document).ready(function () {
    $("#transform").click(function () {
        var links=document.getElementsByClassName("link");
        var visibile=document.getElementById("topnav").getAttribute("visible");
        if(visibile==="false"){
            document.getElementById("topnav").setAttribute("visible","true");
            for(var i=0;i<links.length;i++)
                links[i].style.display='inline-block';
        }
        if(visibile==="true"){
            document.getElementById("topnav").setAttribute("visible","false");
            for(var i=0;i<links.length;i++)
                links[i].style.display='none';
        }
    });
    $.get("users.json", function (data) {
        for (var i = 0; i < data.length; i++) {
              if(data[i].confirmed === false && data[i].userType !== "دانشجو"){
                  var profile_container = document.createElement("DIV");
                  profile_container.className = "profile_container";
                  var profile_container_title = document.createElement("P");
                  profile_container_title.className = "profile_container_title";
                  profile_container_title.innerHTML = data[i].userName;
                  var Hr = document.createElement("HR");
                  var innerdata = document.createElement("P");
                  innerdata.className = "data";
                  innerdata.innerHTML = innerdata.innerHTML + "  نقش کاربر  :";
                  innerdata.innerHTML = innerdata.innerHTML +"  "+ data[i].userType;
                  var button = document.createElement("BUTTON");
                  button.className = "card_buttun";
                  button.innerHTML = "تایید کاربر";
                  var div1  = document.createElement("DIV");
                  div1.className = "div1";
                  var br = document.createElement("BR");
                  profile_container.appendChild(profile_container_title);
                  profile_container.appendChild(Hr);
                  div1.appendChild(innerdata);
                  profile_container.appendChild(div1);
                  profile_container.appendChild(button);
                  document.getElementById("container_div").appendChild(profile_container);
              }
            console.log(data[i].userName);
        }

    });

});

$(document).ready(function () {
    $("#transform").click(function () {
        var links=document.getElementsByClassName("link");
        var visibile=document.getElementById("topnav").getAttribute("visible");
        if(visibile==="false"){
            document.getElementById("topnav").setAttribute("visible","true");
            for(var i=0;i<links.length;i++)
                links[i].style.display='inline-block';
        }
        if(visibile==="true"){
            document.getElementById("topnav").setAttribute("visible","false");
            for(var i=0;i<links.length;i++)
                links[i].style.display='none';
        }
    });
})
/*
function load() {
    var mydata = users;

    var div = document.getElementById('container_div');

    for(var i = 0;i < mydata.length; i++)
    {
        if(mydata[i].userType !="student" && mydata[i].UserStaus == false){
            div.innerHTML = div.innerHTML +" <div class =\"profile_container\" id=''>"+
                " <p class =\"profile_container_title\">"+mydata[i].name+"</p><hr>"+
                "<p class=\"title\">نقش کاربر</p>"+
                " <p class=\"data\">"+mydata[i].userType+"</p><hr>"+
                " <button class=\"card_buttun\" >تایید کاربر</button>"
                +"</div>"
        }
    }
}
*/