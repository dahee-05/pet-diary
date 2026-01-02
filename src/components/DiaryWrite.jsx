import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import OpenAI from "openai";
import styles from "./DiaryWrite.module.css";
import Button from "./Button.jsx";
import dog from "../assets/dog.jpeg";
import cat from "../assets/cat.jpeg";

const CONTENT_MAX_LENGTH = 500;

export default function DiaryWritePage() {
  const textRef = useRef();
  const navigate = useNavigate();

  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [item, setItem] = useState({
    id: 0,
    type: "",
    img: "",
    date: "",
    myMessage: "",
    otherMessage: "",
  });

  const isCounting = item.myMessage.length > CONTENT_MAX_LENGTH;
  const date = new Date();
  const formattedDate =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    "  " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  const handleChange = (e) => {
    const value = e.target.value;
    setItem((prev) => ({ ...prev, myMessage: value }));
  };

  const handleClick = (type) => {
    setItem((prev) => ({ ...prev, type: prev.type === type ? "" : type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const maxId = list.reduce((max, data) => Math.max(max, data.id), 0);
    const aiResult = await sendMessage(item.myMessage, item.type);
    const newItem = {
      ...item,
      id: maxId + 1,
      date: formattedDate,
      img: item.type === "강아지" ? dog : cat,
      otherMessage: aiResult,
    };
    setItem((prev) => ({ ...prev, newItem }));
    navigate("/trans", { state: { item: newItem } });
  };

  const sendMessage = async (myMessage, type) => {
    const url = "https://api.openai.com/v1/responses";
    const data = {
      model: "gpt-4.1-nano",
      input: `너는 ${type}야. 입력한 하루 상황을 바탕으로 동물의 입장에서 왜 그런 행동을 했는지, 그리고 오늘 하루 느낀 감정, 신체 상태를 2~4문장으로 귀엽게 설명해줘. 오늘 상황 ${myMessage}`,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE__OPENAI_KEY}`,
    };

    try {
      const res = await axios.post(url, data, { headers });
      return res.data.output[0].content[0].text;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <textarea
        className={styles.textArea}
        ref={textRef}
        value={item.myMessage}
        onChange={(e) => handleChange(e)}
      />
      <p className={`${styles.info} ${isCounting ? styles.isCounting : ""}`}>
        500자 이내로 입력하세요. [{item.myMessage.length}/500]{" "}
      </p>
      <div className={styles.btn}>
        <Button
          type="button"
          value={"강아지"}
          onClick={handleClick}
          active={item.type === "강아지"}
          opacity={item.type === "고양이"}
          className="writeBtn"
        />
        <Button
          type="button"
          value={"고양이"}
          onClick={handleClick}
          active={item.type === "고양이"}
          opacity={item.type === "강아지"}
          className="writeBtn"
        />
      </div>
      <Button
        type="submit"
        value={"생성"}
        className="submitBtn"
        disabled={item.myMessage.trim() === "" || isCounting}
      />
    </form>
  );
}
