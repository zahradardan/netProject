var username = "شیوا عظیمی"
$(document).ready(function () {
    $.getJSON("users.json", function (data) {
        var refers = [];
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].case.length; j++)
                if (data[i].case[j].refer === username) {
                    refers.push(data[i].case[j])
                }
        }

        for(var i=0;i<refers.length;i++){

            var refer=document.createElement("DIV");
            refer.setAttribute('id',refers[i].caseId)
            refer.classList.add("refer");
            refer.classList.add("container");
            // refer.setAttribute("submitter",refers[i].user);
            refer.onclick=function () {
                var id = $(this).attr('id');
                var queryString = "?case="+id;
                window.location.href = "Action.html" + queryString;
            }

            //Up
            var up=document.createElement("DIV");

            var image=document.createElement("IMG");
            image.src="imgs/profilePicture.jpg";

            var submitter=document.createElement("H2");
            submitter.className="submitter";
            submitter.innerText=refers[i].submitter;

            var date=document.createElement("P");
            date.className="date";
            date.innerText=refers[i].date;

            up.appendChild(image);
            up.appendChild(submitter);
            up.appendChild(date);

            var breaker=document.createElement("DIV");
            breaker.className="breaker";

            //Middle
            var middle=document.createElement("DIV");
            middle.className="middle";

            var divider=[];
            for(var j=0;j<3;j++){
            divider[j]=document.createElement("SPAN");
            divider[j].className="divider";
            divider[j].innerText="|";
            }

            var topic=document.createElement("P");
            topic.className="topic";
            topic.appendChild(divider[0]);
            topic.appendChild(document.createTextNode(refers[i].topic));

            var description=document.createElement("P");
            description.innerText=refers[i].description;

            middle.appendChild(topic);
            middle.appendChild(description);

            //Down
            var down=document.createElement("DIV");

            var status=document.createElement("P");
            // status.innerText=refers[i].status;
            status.appendChild(document.createTextNode("وضعیت"));
            status.appendChild(divider[1]);
            status.appendChild(document.createTextNode(refers[i].status));


            var responsible=document.createElement("P");
            responsible.appendChild(document.createTextNode("مسئول"));
            responsible.appendChild(divider[2]);
            responsible.appendChild(document.createTextNode(refers[i].refer));

            down.appendChild(status);
            down.appendChild(responsible);

            refer.appendChild(up);
            refer.appendChild(breaker);
            refer.appendChild(middle);
            refer.appendChild(down);

            var container=document.getElementById("refers");
            container.appendChild(refer);
        }
    })
});


