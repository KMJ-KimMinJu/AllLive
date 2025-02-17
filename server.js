const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const dummyData = require('./dummyData.js');
const port = 3001;
const cors = require('cors');

require("dotenv").config(); // .env 파일 로드

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
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

app.get("/map/list", (req, res) => {
    res.status(200).send(dummyData);
});


app.get("/map/list/detail", (req, res) => {
    const district = req.get('district');

    if (!district) {
        return res.status(400).json({ error: "district 값을 제공해야 합니다." });
    }

    // 필터링하여 해당 district에 속하는 데이터만 반환
    const filteredList = dummyData.filter(item => item.district == district);

    
    if (filteredList.length === 0) {
        return res.status(404).json({ message: "해당 지역의 데이터가 없습니다."});
    }

    res.send(filteredList);
});


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