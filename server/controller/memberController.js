import * as repository from "../repository/memberRepository.js";

/******************************
 * Member : 로그인
 ******************************/
export const getLogin = async (req, res) => {
  console.log("컨트롤러 확인-->", req.body);
  const result = await repository.getLogin(req.body);
  res.json(result);
};
