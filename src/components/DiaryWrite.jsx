import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const maxId = list.reduce((max, data) => Math.max(max, data.id), 0);
    const newItem = {
      ...item,
      id: maxId + 1,
      date: formattedDate,
      img: item.type === "강아지" ? dog : cat,
    };
    setItem((prev) => ({ ...prev, newItem }));
    navigate("/trans", { state: { item: newItem } });
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
