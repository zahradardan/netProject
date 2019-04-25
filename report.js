$(document).ready(function () {

   // $("#subject").click(function () {
        $.get("users.json", function (data) {
            var content = document.getElementById("content");

            var title_box = document.getElementById("title_box");
            var header_mark1 = document.createElement("DIV");
            header_mark1.className="header_mark";
            header_mark1.style.marginTop="10px";
            header_mark1.style.textAlign="center";
            header_mark1.innerHTML="شکایات";
            header_mark1.style.fontSize="30px";
            header_mark1.style.boxShadow="1px 1px 2px cadetblue";
            title_box.appendChild(header_mark1);

            for (var i = 0; i < data.length; i++) {
                for( var j = 0 ; j < data[i].case.length ;j++) {
                    if (data[i].case[j].topic === "شکایت"){
                        var case_card = document.createElement("DIV");
                        case_card.className="user_card";
                        var date = document.createElement("DIV");
                        date.className="case_inform";
                        date.innerHTML=data[i].case[j].date+" : تاریخ ";
                        date.style.cssFloat="left";
                        var submitter = document.createElement("DIV");
                        submitter.className="case_inform";
                        submitter.innerHTML=data[i].case[j].submitter;
                        var referTo = document.createElement("DIV");
                        referTo.className="case_inform";
                        referTo.innerHTML="مسئول رسیدگی :"+data[i].case[j].refer;

                        var description = document.createElement("P");
                        description.innerHTML=data[i].case[j].description;

                        case_card.appendChild(date);
                        case_card.appendChild(submitter);
                        case_card.appendChild(referTo);
                        case_card.appendChild(description);
                        content.appendChild(case_card);
                    }
                }
            }

            var content2 = document.getElementById("content2");
            var title_box2 = document.getElementById("title_box2");
            var header_mark2 = document.createElement("DIV");
            header_mark2.className="header_mark";
            header_mark2.style.marginTop="10px";
            header_mark2.style.textAlign="center";
            header_mark2.innerHTML="انتقادات";
            header_mark2.style.fontSize="30px";
            header_mark2.style.boxShadow="1px 1px 2px cadetblue";

            for (var i = 0; i < data.length; i++) {
                for( var j = 0 ; j < data[i].case.length ;j++) {
                    if (data[i].case[j].topic === "انتقاد"){
                        var case_card = document.createElement("DIV");
                        case_card.className="user_card";
                        var date = document.createElement("DIV");
                        date.className="case_inform";
                        date.innerHTML=data[i].case[j].date;
                        var submitter = document.createElement("DIV");
                        submitter.className="case_inform";
                        submitter.innerHTML=data[i].case[j].submitter;
                        var referTo = document.createElement("DIV");
                        referTo.className="case_inform";
                        referTo.innerHTML=data[i].case[j].refer;
                        var description = document.createElement("P");
                        description.innerHTML=data[i].case[j].description;

                        case_card.appendChild(date);
                        case_card.appendChild(submitter);
                        case_card.appendChild(referTo);
                        case_card.appendChild(description);
                        content2.appendChild(case_card);
                    }
                }
            }

            title_box2.appendChild(header_mark2);

            var content3 = document.getElementById("content3");
            var title_box3 = document.getElementById("title_box3");
            var header_mark3 = document.createElement("DIV");
            header_mark3.className="header_mark";
            header_mark3.style.marginTop="10px";
            header_mark3.style.textAlign="center";
            header_mark3.innerHTML="پیشنهادات";
            header_mark3.style.fontSize="30px";
            header_mark3.style.boxShadow="1px 1px 2px cadetblue";

            for (var i = 0; i < data.length; i++) {
                for( var j = 0 ; j < data[i].case.length ;j++) {
                    if (data[i].case[j].topic === "پیشنهاد"){
                        var case_card = document.createElement("DIV");
                        case_card.className="user_card";
                        var date = document.createElement("DIV");
                        date.className="case_inform";
                        date.innerHTML=data[i].case[j].date;
                        var submitter = document.createElement("DIV");
                        submitter.className="case_inform";
                        submitter.innerHTML=data[i].case[j].submitter;
                        var referTo = document.createElement("DIV");
                        referTo.className="case_inform";
                        referTo.innerHTML=data[i].case[j].refer;
                        var description = document.createElement("P");
                        description.innerHTML=data[i].case[j].description;

                        case_card.appendChild(date);
                        case_card.appendChild(submitter);
                        case_card.appendChild(referTo);
                        case_card.appendChild(description);
                        content3.appendChild(case_card);
                    }
                }
            }

            title_box3.appendChild(header_mark3);

        });
});
function myFunction(x) {
    x.classList.toggle("change");
    var menue = document.getElementById("mne");
    if(menue.className==="menue1"){
        menue.className="menue2";
    }else{
        menue.className="menue1";
    }
}

function date_base() {
    var date = document.getElementById("date");
    var string = date.value;

}
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