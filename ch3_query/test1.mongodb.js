
// mongodb의 compass에서 

// database 새로 생성 -> test -> collection의 name은 샘플 json 이름 그대로 써서 생성 -> import -> 해당 json 파일 선택하면 등록이 됨.

// 이렇게 4개 다 만들고나서 밑에 조회하면 나오게 됨.

// 1 area 컬렉션 만들기
// 1-2 area.json 임포트하기. 
// 2 by_month 컬렉션 만들기
// 2-2 by_month.json 임포트하기. 
// 3 by_road_type 컬렉션 만들기
// 3-2 by_road_type.json 임포트하기. 
// 4 by_type 컬렉션 만들기
// 4-2 by_type.json 임포트하기. 



// use("test");
// find(<query>,<projection>)
// query: 조건부, projection: 보고싶은 열

// "교차로내.accident_count" 이것만 보여주고, 나머지 열 안보여줘도 됨. -> 단, _id는 제외.
db.by_road_type.find({county:"강릉시"},{"교차로내.accident_count":1});

// _id 제외해죠 select 교차로내.accident_count
db.by_road_type.find({county:"강릉시"},{"교차로내.accident_count":1, _id: 0});

// 다보여줘. select *
db.by_road_type.find({ county: "강릉시" });