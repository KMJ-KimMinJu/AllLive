const allLiveList = [
    { district: "해운대구", name: "라이프스타일 카페 OUI", address: "부산 해운대구 구남로 21 경동리인뷰 2차 123호" },
    { district: "해운대구", name: "플라잉스콘", address: "부산 해운대구 마린시티2로 33 해운대두산위브더제니스스퀘어 1층125호" },
    { district: "해운대구", name: "스탠다드브레드 해운대", address: "부산 해운대구 해운대로 571 1, 2층" },
    { district: "해운대구", name: "커피프론트 센텀시티", address: "부산 해운대구 APEC로 17 1층 커피프론트" },
    { district: "해운대구", name: "나가하마만게츠", address: "부산 해운대구 우동1로 57 대영빌딩1층" },
    { district: "해운대구", name: "다온 한정식", address: "부산 해운대구 해운대해변로 154 마리나동원8층" },
    { district: "해운대구", name: "선창횟집", address: "부산 해운대구 달맞이길62번길 67 선창횟집" },
    { district: "해운대구", name: "장산수육", address: "부산 해운대구 좌동순환로 173 지하1층 105호" },

    { district: "부산진구", name: "연의양과", address: "부산 부산진구 동천로 56 1층" },
    { district: "부산진구", name: "러버커피", address: "부산 부산진구 전포대로 208 2층 ruver" },
    { district: "부산진구", name: "도시농가코페도코", address: "부산 부산진구 중앙대로666번길 17 시연빌딩 1층" },
    { district: "부산진구", name: "페난", address: "부산 부산진구 동성로 30-1 1층" },
    { district: "부산진구", name: "바오하우스", address: "부산 부산진구 서전로38번길 62-9" },
    { district: "부산진구", name: "미례 국밥", address: "부산 부산진구 전포대로176번길 23 1층" },
    { district: "부산진구", name: "전포곱창 계곱주", address: "부산 부산진구 전포대로210번길 6 1층" },
    { district: "부산진구", name: "은신처", address: "부산 부산진구 전포대로162번가길 7-1 1층" },

    { district: "남구", name: "복합성", address: "부산 남구 진남로36번길 2 2층" },
    { district: "남구", name: "쿠모네스트", address: "부산 남구 지게골로 101-4 쿠모" },
    { district: "남구", name: "카페미마", address: "부산 남구 수영로334번길 47-2 카페미마" },
    { district: "남구", name: "광명집", address: "부산 남구 신선로 458" },
    { district: "남구", name: "웨이양", address: "부산 남구 용소로7번길 78" },

    { district: "기장군", name: "리투커피바", address: "부산 기장군 일광읍 문오성길 396 리투커피바" },
    { district: "기장군", name: "라이프라이크", address: "부산 기장군 일광읍 일광로 524 1층" },
    { district: "기장군", name: "피크스퀘어", address: "부산 기장군 기장읍 기장해안로 864 피크스퀘어" },
    { district: "기장군", name: "브라운피크닉", address: "부산 기장군 철마면 개좌로 763-25 브라운피크닉" },
    { district: "기장군", name: "나들목식당", address: "부산 기장군 일광읍 화전2길 22" },
    { district: "기장군", name: "해진횟집", address: "부산 기장군 기장읍 기장해안로 921" },
    { district: "기장군", name: "고향연화", address: "부산 기장군 기장읍 연화길 33-8" },
    { district: "기장군", name: "일광돈돈", address: "부산 기장군 일광읍 해빛6로 85-5 1층" },

    { district: "금정구", name: "알바 카페", address: "부산 금정구 장전로20번길 21 1, 2층" },
    { district: "금정구", name: "모모후", address: "부산 금정구 금정로52번길 46" },
    { district: "금정구", name: "라이크댓커피", address: "부산 금정구 수림로91번길 51 1F 라이크댓커피" },
    { district: "금정구", name: "셀라스", address: "부산 금정구 금샘로 538" },
    { district: "금정구", name: "구서옛날삼겹살", address: "부산 금정구 금강로 425 1층 구서옛날삼겹살" },
    { district: "금정구", name: "신천닭도리", address: "부산 금정구 금강로 271-6 1층" },
    { district: "금정구", name: "대창인생", address: "부산 금정구 중앙대로1531번길 8 1층" },
    { district: "금정구", name: "금정어가", address: "부산 금정구 두실로 17 태광빌딩 1, 2층 금정어가" },

    { district: "연제구", name: "디저트시네마", address: "부산 연제구 쌍미천로 32-1" },
    { district: "연제구", name: "퍼퍼커피", address: "부산 연제구 과정로276번길 23 1층" },
    { district: "연제구", name: "호시노아 오브 수월경화", address: "부산 연제구 쌍미천로 82 1층" },
    { district: "연제구", name: "고성횟집", address: "부산 연제구 중앙대로 1116-9" },
    { district: "연제구", name: "연산정", address: "부산 연제구 연제로8번길 54 1층" },

    { district: "사하구", name: "이프유스테이 하단", address: "부산 사하구 하신번영로 401 2층" },
    { district: "사하구", name: "인오프", address: "부산 사하구 낙동대로 490 1층 in off" },
    { district: "사하구", name: "뱅가", address: "부산 사하구 몰운대2길 9" },
    { district: "사하구", name: "만디", address: "부산 사하구 오작로 104-7" },
    { district: "사하구", name: "카페 시온", address: "부산 사하구 승학로233번길 89 카페 시온" },

    { district: "강서구", name: "카페 엘룬", address: "부산 강서구 명지오션시티4로 100 오션스퀘어 6층" },
    { district: "강서구", name: "어라우즈로스터리", address: "부산 강서구 르노삼성대로 630 어라우즈로스터리" },
    { district: "강서구", name: "동래정", address: "부산 강서구 명지국제2로28번길 26 104호, 105호" },
    { district: "강서구", name: "스타필스 명지", address: "부산 강서구 명지국제6로 168" },
    { district: "강서구", name: "명지 첫집", address: "부산 강서구 명지국제6로232번길 18 1층" },

    { district: "사상구", name: "공심방", address: "부산 사상구 백양대로 370 만석빌딩 2층" },
    { district: "사상구", name: "합천일류돼지국밥", address: "부산 사상구 광장로 34 윌로펌프" },
    { district: "사상구", name: "머거떡케이크", address: "부산 사상구 새벽로168번길 29 1층 머거떡케이크" },
    { district: "사상구", name: "에그머니나", address: "부산 사상구 광장로86번길 6 1층 에그머니나" },
    { district: "사상구", name: "헬로우빈", address: "부산 사상구 가야대로 306 1층" },

    { district: "중구", name: "밀곳", address: "부산 중구 부평1길 49 1층" },
    { district: "중구", name: "서정다방", address: "부산 중구 구덕로 63 1층 서정다방" },
    { district: "중구", name: "돌고래순두부", address: "부산 중구 중구로40번길 15" },
    { district: "중구", name: "깡통골목할매 유부전골", address: "부산 중구 부평3길 29" },
    { district: "중구", name: "중구난방", address: "부산 중구 중앙동2가 49-14" },

    { district: "영도구", name: "르봉비", address: "부산 영도구 태종로99번길 39" },
    { district: "영도구", name: "오구", address: "부산 영도구 남항서로 52" },
    { district: "영도구", name: "카페 옵다", address: "부산 영도구 동삼로 126 1층" },
    { district: "영도구", name: "화복반점", address: "부산 영도구 일산봉로39번길 14 1층 화복반점" },
    { district: "영도구", name: "영도미학", address: "부산 영도구 동삼로 114 2층" },

    { district: "서구", name: "아 그집", address: "부산 서구 충무대로 43" },
    { district: "서구", name: "산드라니", address: "부산 서구 충무대로 8 기산비치타운 상가 2F" },
    { district: "서구", name: "지또", address: "부산 서구 구덕로301번길 21 1층" },
    { district: "서구", name: "유씨", address: "부산 서구 망양로 191-1 1층" },
    { district: "서구", name: "시민제과", address: "부산 서구 구덕로 116" },

    { district: "동구", name: "카페 편안", address: "부산 동구 증산북로13번길 6" },
    { district: "동구", name: "꼼빠뇽베이커리", address: "부산 동구 범곡로28번길 16" },
    { district: "동구", name: "고관 명물 꽈배기방", address: "부산 동구 고관로 95 1층" },
    { district: "동구", name: "스완양분식", address: "부산 동구 중앙대로236번길 7-5" },
    { district: "동구", name: "범일빈대떡", address: "부산 동구 중앙대로 519 1층" },

    { district: "북구", name: "용덕장코다리", address: "부산 북구 화명대로12번길 50 1층" },
    { district: "북구", name: "고랑식당", address: "부산 북구 만덕대로28번길 22 고랑식당" },
    { district: "북구", name: "박용채의대박터진돈까스", address: "부산 북구 덕천로304번길 18" },
    { district: "북구", name: "엔에프커피", address: "부산 북구 의성로122번길 64 1층" },
    { district: "북구", name: "드래곤과자점", address: "부산 북구 만덕1로 17 1층" },

    { district: "수영구", name: "은상", address: "부산 수영구 광안해변로307번길 25-2 2층" },
    { district: "수영구", name: "자갈치횟집", address: "부산 수영구 수영로702번길 28 자갈치횟집" },
    { district: "수영구", name: "쿠마자케", address: "부산 수영구 수영로545번가길 18 101호" },
    { district: "수영구", name: "카페 말루비아", address: "부산 수영구 수영로408번길 65 우성보라아파트상가 1층" },
    { district: "수영구", name: "바닷마을과자점", address: "부산 수영구 광남로48번길 43 바닷마을과자점" },

    { district: "동래구", name: "태백관", address: "부산 동래구 충렬대로285번길 31" },
    { district: "동래구", name: "주문진 막국수", address: "부산 동래구 사직로58번길 8" },
    { district: "동래구", name: "옥당분식", address: "부산 동래구 사직북로28번길 101" },
    { district: "동래구", name: "쿠루미 과자점", address: "부산 동래구 온천천로 71-1" },
    { district: "동래구", name: "커피에세이", address: "부산 동래구 명안로85번길 5 커피에세이" }

];

module.exports = allLiveList;