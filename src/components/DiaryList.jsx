import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DiaryList.module.css";
import Button from "./Button.jsx";

export default function DiaryList() {
  const navigate = useNavigate();
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  console.log("리스트-->", list);

  const handleClick = () => {
    navigate("/write");
  };

  return (
    <div className={styles.container}>
      {list.length !== 0 ? (
        list.map((item) => (
          <div className={styles.listContainer}>
            <div>{item.content}</div>
            <div>{item.date}</div>
          </div>
        ))
      ) : (
        <div className={styles.textContainer}>아직 작성한 글이 없습니다.</div>
      )}
      <Button
        type="button"
        value="일 기 쓰 기"
        onClick={handleClick}
        className="createDiary"
      />
    </div>
  );
}
