const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const dummyData = require('./dummyData.js');
const port = 3001;
require("dotenv").config(); // .env 파일 로드

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 정적 파일 제공
app.use(express.static(path.join(__dirname)));


// 서버 실행
app.listen(port, () => {
    console.log(`서버가 실행 중입니다. http://localhost:${port}`);
});

app.set("view engine", "ejs"); // EJS 사용

app.get("/map", (req, res) => {
    res.render('mapTest', { MAPCLIENTID: process.env.MAPCLIENTID });
});