$(document).ready(function () {
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(6);
    $.getJSON("users.json", function (data) {

        var Case=document.getElementById("case");
        var refer;
        var type ;

        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].case.length; j++)
                if (data[i].case[j].caseId === queryString) {
                    refer = data[i].case[j];
                    type=data[i].userType;
                }
        }


        //UP
        var up=document.createElement("DIV");
        up.className="up";

        var img =document.createElement("IMG");
        img.src="imgs/profilePicture.jpg";

        var submitter=document.createElement("H2");
        submitter.className="submitter";
        submitter.innerText=refer.submitter;

        var userType=document.createElement("H2");
        userType.className="userType";
        userType.innerText=type;

        var date=document.createElement("P");
        date.className="date";
        date.innerHTML=refer.date;

        up.appendChild(img);
        up.appendChild(submitter);
        up.appendChild(userType);
        up.appendChild(date);
        Case.appendChild(up);

        var breaker=document.createElement("DIV");
        breaker.className="breaker";
        Case.appendChild(breaker);


        //Middle
        var middle=document.createElement("DIV");
        middle.className="middle";

        var divider=[];
        for(var j=0;j<3;j++){
            divider[j]=document.createElement("SPAN");
            divider[j].className="divider";
            divider[j].innerText="| ";
        }

        var topic=document.createElement("P");
        topic.className="topic";
        topic.innerText=refer.topic;

        var description=document.createElement("P");
        description.className="description";
        description.innerText=refer.description;

        middle.appendChild(topic);
        middle.appendChild(divider[0]);
        middle.appendChild(description);
        Case.appendChild(middle);

        //Down
        var down=document.createElement("DIV");
        down.className="down";

        var status=document.createElement("P");
        status.appendChild(document.createTextNode("وضعیت"));
        status.appendChild(divider[1]);
        status.appendChild(document.createTextNode(refer.status));


        var responsible=document.createElement("P");
        responsible.appendChild(document.createTextNode("مسئول"));
        responsible.appendChild(divider[2]);
        responsible.appendChild(document.createTextNode(refer.refer));

        down.appendChild(status);
        down.appendChild(responsible);
        Case.appendChild(down);

    })
});

var users;

function execute() {
    var refButton = document.getElementById("refer");
    refButton.style.display = 'none';
    var exeButton = document.getElementById("execute");
    exeButton.style.display = 'block';

    var send = document.getElementById("send");
    send.style.display = 'block';


}

function refer() {
    var exeButton = document.getElementById("execute");
    exeButton.style.display = 'none';
    var refButton = document.getElementById("refer");
    refButton.style.display = 'block';

    var send = document.getElementById("send");
    send.style.display = 'block';
}

function action() {
    var users = $.getJSON();
    var users = JSON.parse();
}


