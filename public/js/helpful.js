const socket = io();
var body = document.getElementById("list");

var data;

socket.emit("requestInitData", "");

var readableData = "";

socket.on("initData", (msg) => {
    console.log("Data received");
    data = msg;
    allEvents();
    body.innerHTML = readableData; 
});

function allEvents(){
    var v = data.swimNames.length;
    for(let i=0;i<v;i++){
        readableData += i + " " + data.swimNames[i] + " " + data.swimPoints[i] + "<br>";
    }
}