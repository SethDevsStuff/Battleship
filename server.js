const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

const PORT = 3434;

const gameInit = {
    totalAttacks: 6,
    swimNames:["25 Free", "25 Back", "25 Breast", "25 Fly", "50 Free", "50 Back", "50 Breast", "50 Fly", "50 IM", "50 Kick", "50 Scull", "100 Free", "100 Back", "100 Breast",
"100 Fly", "100 Kick", "100 IM", "100 Scull", "200 Free", "200 Back", "200 Breast", "200 Fly", "200 Kick", "200 IM", "300 Free", "400 IM", "500 Free", "10 Marlin Jumps", "30 Second Wall Sit"],
    swimPoints:[1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 5, 6, 8, 10, 6, 8, 7, 15, 18, 24, 36, 18, 22, 25, 55, 50, 2, 2],
};

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/main.html");
});

app.get("/helpful", (req, res) => {
    res.sendFile(__dirname + "/html/helpful.html");
})

io.on("connection", (socket) => {
    /*
    socket.on("", (msg) => {
        socket.join("roomID");
        socket.emit
    });
    */
    socket.on("requestInitData", () => {
        console.log("Init Data Requested");
        socket.emit("initData", gameInit);
    })
});

class Game {
    constructor(laneCount){
        this.laneCount = laneCount;
        this.lanes = [];
    }
}

class Lane {
    constructor(){
        this.points = 0;
        this.remainingAttacks
    }
}

httpServer.listen(process.env.PORT || PORT);
console.log("listening on port " + PORT);