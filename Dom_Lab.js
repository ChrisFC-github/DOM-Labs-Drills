var divSquareNum = 0;
var array1 = [];
const colorArray = ["red", "blue", "green", "yellow", "pink", "brown", "orange", "silver"];
let squares = document.querySelectorAll('.square');
document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("button"); // creates button
    button.innerHTML = "Add Square";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button); // appends button without using html
    //<div class="container"></div>
    var parentDiv = document.createElement("div");   // Create a div element
    parentDiv.classList.add("container", "col-12");
    document.body.appendChild(parentDiv);               // Append <button> to <body>
    const parentDivider = document.getElementsByClassName("container");
    button.addEventListener("click", function () { //event trigger
        i = divSquareNum++;
        let divChild = document.createElement("div");
        array1.push(i);
        console.log(array1);
        divChild.id = divSquareNum;
        divChild.classList.add("square", "justify-content-center");
        let divTextNode = document.createTextNode(divSquareNum); //value for alert
        divChild.appendChild(divTextNode);
        parentDiv.appendChild(divChild);

        divChild.addEventListener("dblclick", function () {
            if (divChild.innerHTML % 2 == 0) {
                var divChildid = parseInt(divChild.innerHTML) + 1;
                var evendivChildid = parseInt(divChild.innerHTML); //value for alert
                var elemEven = document.getElementById(divChildid);
                elemEven.remove();
                function required(elemEven) {
                    if (elemEven.value.length == 0) {
                        alert("message");
                        return false;
                    }
                    return true;
                }
            } else {
                var divChildid1 = parseInt(divChild.innerHTML) - 1;
                var odddivChildid = parseInt(divChild.innerHTML);
                var elemOdd = document.getElementById(divChildid1);
                elemOdd.remove();
            }
        });
        divChild.addEventListener("click", function () {
            changeFontColor(divChild);
        });
    });

    function changeFontColor(element) {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        element.style.color = colorArray[randomNum];
    }
});
