import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const sendMessage = async (props) => {
  const url = "https://api.openai.com/v1/responses";
  const GPTPrompt_1 = `너는 내가 키우는 애완동물 ${props.type}야. 입력한 하루 상황을 바탕으로 애완 동물인 너의 입장에서 오늘 왜 그런 행동을 했는지, 그리고 오늘 하루 느낀 감정, 신체 상태를 2~4문장으로 귀엽게 설명해줘. 오늘 상황은`;
  const data = {
    model: "gpt-4.1-nano",
    input: `${GPTPrompt_1} ${props.myMessage}`,
  };
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.DB_OPENAI_KEY}`,
  };

  try {
    const res = await axios.post(url, data, { headers });
    return res.data.output[0].content[0].text;
  } catch (error) {
    console.log(error);
  }
};

export default sendMessage;
