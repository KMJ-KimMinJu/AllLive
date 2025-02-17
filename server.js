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

//
app.get('/api/geocode', async (req, res) => {
    const address = req.query.address;

    if (!address) {
        return res.status(400).json({ error: "주소를 입력하세요." });
    }

    const clientId = process.env.MAPCLIENTID;
    const clientSecret = process.env.MAPSCRETKEY;
    const encodedAddress = encodeURIComponent(address);

    const url = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodedAddress}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "x-ncp-apigw-api-key-id": clientId,
                "x-ncp-apigw-api-key": clientSecret,
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error("Geocoding API 오류:", error);
        res.status(500).json({ error: "서버 오류" });
    }
});

//
app.get("/map/list", (req, res) => {
    res.status(200).send(dummyData);
});


// 서버 실행
app.listen(port, () => {
    console.log(`서버가 실행 중입니다. http://localhost:${port}`);
});

app.set("view engine", "ejs"); // EJS 사용

app.get("/map", (req, res) => {
    res.render('mapTest', { MAPCLIENTID: process.env.MAPCLIENTID });
});