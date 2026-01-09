import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "../css/DiaryWrite.module.css";
import Button from "./Button.jsx";
import dog from "../../public/imgs/dog.jpeg";
import cat from "../../public/imgs/cat.jpeg";

const CONTENT_MAX_LENGTH = 500;

export default function DiaryWritePage() {
  const textRef = useRef();
  const navigate = useNavigate();

  const [diary, setDiary] = useState({
    id: "test1",
    type: "",
    img: "",
    myMessage: "",
    otherMessage: "",
  });

  const isOver = diary.myMessage.length > CONTENT_MAX_LENGTH;

  const handleTextChange = (e) => {
    const value = e.target.value;
    setDiary((prev) => ({ ...prev, myMessage: value }));
  };

  const handleTypeClick = (type) => {
    setDiary((prev) => ({ ...prev, type: prev.type === type ? "" : type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDiary = {
      ...diary,
      img: diary.type === "강아지" ? dog : cat,
    };
    setDiary((prev) => ({ ...prev, newDiary }));
    navigate("/trans", { state: { diary: newDiary } });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <textarea
        className={styles.textArea}
        ref={textRef}
        value={diary.myMessage}
        onChange={(e) => handleTextChange(e)}
      />
      <p className={`${styles.info} ${isOver ? styles.isOver : ""}`}>
        500자 이내로 입력하세요. [{diary.myMessage.length}/500]{" "}
      </p>
      <div className={styles.btn}>
        <Button
          value="강아지"
          onClick={() => handleTypeClick("강아지")}
          active={diary.type === "강아지"}
          opacity={diary.type === "고양이"}
          className="writeBtn"
        />
        <Button
          value="고양이"
          onClick={() => handleTypeClick("고양이")}
          active={diary.type === "고양이"}
          opacity={diary.type === "강아지"}
          className="writeBtn"
        />
      </div>
      <Button
        type="submit"
        value="생성"
        className="submitBtn"
        disabled={diary.myMessage.trim() === "" || isOver}
      />
    </form>
  );
}
