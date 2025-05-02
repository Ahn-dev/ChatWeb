const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());              // 다른 도메인에서 서버로 요청을 보낼 때 CORS 정책을 확인하여 요청을 허용할지 말지를 결정
app.use(express.json());      // JSON 형식의 요청 본문을 처리하고 파싱해서 자바스크립트 객체로 변환하는 역할

// 테스트용 기본 라우트
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

// 여행지 관련 API 엔드포인트는 여기에 추가 예정
// app.use('/api/travels', require('./routes/travelRoutes'));
app.use('/api/travels', require('./routes/travelRoutes'));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
  요청이 막힐 경우, 
  CORS 객체가 실행 -> Port -> Json -> 라우팅 연결
  CORS 위치 신경 써야함. <항상 최상단 위치>

*/
