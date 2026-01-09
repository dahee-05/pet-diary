import express from "express";
import cors from "cors";
import diaryRouter from "./router/diaryRouter.js";
import memberRouter from "./router/memberRouter.js";

const app = express(); // express 서버 객체 생성
const port = 9000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/test", (req, res) => {
  console.log("서버 --->", req.body);
  res.json(req.body);
});

app.use("/member", memberRouter);
app.use("/diary", diaryRouter);

// express 서버 전원 버튼, 실제로 서버 실행
app.listen(port, () => {
  console.log(`app on ${port}`);
});

/*
 * express.json()) - JSON 형태의 요청 body를 JS 객체로 변환
 * : axios/fetch는 데이터를 보낼때 자체적으로 json형태로 바꿔줌
 * : 변환 전엔 문자열, 변환 후엔 js 객체(메모리에 올라간 구조)
 *
 * app.use(express.urlencoded()) -  form테이터를 파싱
 * : title=테스트&content=내용
 *  (파싱)-->  req.body = {title: "테스트", content: "내용"};
 *
 * app.use(cors()) - 다른 출처(포트)에서 온 요청 허용
 * : 없을 경우 브라우저가 연결 차단
 *
 */
