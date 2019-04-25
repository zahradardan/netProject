$(document).ready(function () {
    $.get("users.json", function (data) {
        for (var i = 0; i < data.length; i+=2) {
           // alert(data[1].userName);
            if(data[i].userType!=="Student") {
                var user_card = document.createElement("DIV");
                user_card.className = "user_card";
                var user_name = document.createElement("P");
                user_name.innerHTML = data[i].userName;

                var activate = document.createElement("BUTTON");
                activate.className = "manager_act";
                activate.innerHTML = "تأیید کاربر";
                activate.style.backgroundColor = "forestgreen";

                var unActive = document.createElement("BUTTON");
                unActive.className = "manager_act";
                unActive.innerHTML = "غیر فعال کردن کاربر";
                unActive.style.backgroundColor = "gold";

                var delet_user = document.createElement("BUTTON");
                delet_user.className = "manager_act";
                delet_user.innerHTML = "حذف کاربر";
                delet_user.style.backgroundColor = "red";


                var details = document.createElement("BUTTON");
                details.className = "manager_act";
                details.innerHTML = "مشاهده جزئیات پروفایل";
                details.style.backgroundColor = "blue";


                var line = document.createElement("BR");

                user_card.appendChild(user_name);
                user_card.appendChild(activate);
                user_card.appendChild(unActive);
                user_card.appendChild(delet_user);
                user_card.appendChild(details);
                document.getElementById("r_part").appendChild(user_card);
            }
            }
      //  }
        for (var i = 1; i < data.length; i+=2) {
            // alert(data[1].userName);
            if(data[i].userType!=="Student"){
                var user_card = document.createElement("DIV");
                user_card.className="user_card";
                var user_name = document.createElement("P");
                user_name.innerHTML=data[i].userName;
                user_card.appendChild(user_name);
                document.getElementById("l_part").appendChild(user_card);


                var activate = document.createElement("BUTTON");
                activate.className="manager_act";
                activate.innerHTML="تأیید کاربر";
                activate.style.backgroundColor="forestgreen";

                var unActive = document.createElement("BUTTON");
                unActive.className="manager_act";
                unActive.innerHTML="غیر فعال کردن کاربر";
                unActive.style.backgroundColor="gold";

                var delet_user = document.createElement("BUTTON");
                delet_user.className="manager_act";
                delet_user.innerHTML="حذف کاربر";
                delet_user.style.backgroundColor="red";


                var details = document.createElement("BUTTON");
                details.className="manager_act";
                details.innerHTML="مشاهده جزئیات پروفایل";
                details.style.backgroundColor="blue";


                var line = document.createElement("BR");

                user_card.appendChild(user_name);
                user_card.appendChild(activate);
                user_card.appendChild(unActive);
                user_card.appendChild(delet_user);
                user_card.appendChild(details);


            }

        }
    });

});