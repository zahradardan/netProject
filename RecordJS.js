var username = "شیوا عظیمی"
$(document).ready(function () {
    var user = document.getElementById("username");
    user.innerText = username;
    $.getJSON("users.json", function (data) {
        var refers = [];
        var admin=false;
        for (var i = 0; i < data.length; i++) {
            if (data[i].userName === username)
                if(data[i].userType==="مدیر")
                    admin=true;
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i].userName === username || admin)
                for (var j = 0; j < data[i].case.length; j++)
                    refers.push(data[i].case[j])

        }
        cases(refers);
        submitters();
        responsibles();
    });

    $(".selection").change(function () {
        var filter = document.getElementsByClassName("selection");
        var refers = [];
        $.getJSON("users.json", function (data) {
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].case.length; j++) {

                    var first = data[i].case[j].status === filter[0].value;
                    var second = data[i].case[j].submitter === filter[1].value;
                    var third = data[i].case[j].refer === filter[2].value;

                    if (filter[0].value === "بدون فیلتر")
                        first = true;
                    if (filter[1].value === "بدون فیلتر")
                        second = true;
                    if (filter[2].value === "بدون فیلتر")
                        third = true;

                    if (first && second && third) {
                        refers.push(data[i].case[j])
                    }
                }
            }
            cases(refers);
        })
    });

    function cases(refers) {
        var container = document.getElementById("refers");
        container.innerHTML = '';

        for (var i = 0; i < refers.length; i++) {

            var refer = document.createElement("DIV");
            refer.setAttribute('id', refers[i].caseId)
            refer.classList.add("refer");
            refer.classList.add("container");

            //Up
            var up = document.createElement("DIV");

            var image = document.createElement("IMG");
            image.src = "imgs/profilePicture.jpg";

            var submitter = document.createElement("H2");
            submitter.className = "submitter";
            submitter.innerText = refers[i].submitter;

            var date = document.createElement("P");
            date.className = "date";
            date.innerText = refers[i].date;

            up.appendChild(image);
            up.appendChild(submitter);
            up.appendChild(date);

            var breaker = document.createElement("DIV");
            breaker.className = "breaker";

            //Middle
            var middle = document.createElement("DIV");
            middle.className = "middle";

            var divider = [];
            for (var j = 0; j < 3; j++) {
                divider[j] = document.createElement("SPAN");
                divider[j].className = "divider";
                divider[j].innerText = "|";
            }

            var topic = document.createElement("P");
            topic.className = "topic";
            topic.appendChild(divider[0]);
            topic.appendChild(document.createTextNode(refers[i].topic));

            var description = document.createElement("P");
            description.innerText = refers[i].description;

            middle.appendChild(topic);
            middle.appendChild(description);

            //Down
            var down = document.createElement("DIV");

            var status = document.createElement("P");
            status.appendChild(document.createTextNode("وضعیت"));
            status.appendChild(divider[1]);
            status.appendChild(document.createTextNode(refers[i].status));

            var responsible = document.createElement("P");
            responsible.appendChild(document.createTextNode("مسئول"));
            responsible.appendChild(divider[2]);
            responsible.appendChild(document.createTextNode(refers[i].refer));

            down.appendChild(status);
            down.appendChild(responsible);

            refer.appendChild(up);
            refer.appendChild(breaker);
            refer.appendChild(middle);
            refer.appendChild(down);

            if(refers[i].status==="بسته") {
                //Feedback
                var feedback = document.createElement("DIV");
                feedback.className = "feedback";

                var thumbs = [];
                for (var j = 0; j < 2; j++) {
                    thumbs[j] = document.createElement("BUTTON");
                    thumbs[j].className = "thumb";

                    thumbs[j].onclick = function (e) {
                        var parent = e.target.parentNode;
                        var sibling = parent.childNodes;
                        for (var i = 0; i < sibling.length; i++) {
                            sibling[i].style.transform = "scale(1)";
                            sibling[i].style.filter = "drop-shadow(5px 5px 5px rgba(0,0,0,0.3)) grayscale(40%)";
                        }
                        e.target.style.transform = "scale(1.5)";
                        e.target.style.filter = "drop-shadow(5px 5px 5px rgba(0,0,0,0.3)) grayscale(0)";
                    }

                    feedback.appendChild(thumbs[j]);
                }
                refer.appendChild(feedback);
            }
            container.appendChild(refer);
        }
    }
});

function submitters() {
    var submitters = document.getElementById("submitters");

    $.getJSON("users.json", function (data) {
        var userType;
        for (var i = 0; i < data.length; i++) {
            if (data[i].userName === username)
                userType = data[i].userType;
        }
        if (userType === "مدیر") {
            var option = document.createElement("OPTION");
            option.innerText = "بدون فیلتر";
            submitters.appendChild(option);
            for (var i = 0; i < data.length; i++) {
                var option = document.createElement("OPTION");
                option.innerText = data[i].userName;
                submitters.appendChild(option);
            }
        } else {
            submitters.innerText = '';
            var option = document.createElement("OPTION");
            option.innerText = username;
            submitters.appendChild(option);
        }
    })


}

function userType() {
    $.getJSON("users.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].userName === username)
                return data[i].userType;
        }
    })
}

function responsibles() {
    var responsible = document.getElementById("responsibles");
    var duplicates = [];
    $.getJSON("users.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].case.length; j++) {
                if (!duplicates.includes(data[i].case[j].refer)) {
                    duplicates.push(data[i].case[j].refer)
                    var option = document.createElement("OPTION");
                    option.innerText = data[i].case[j].refer;
                    responsible.appendChild(option);
                }
            }
        }
    })
}







