import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/DiaryList.module.css";
import Button from "./Button.jsx";
import axios from "axios";

export default function DiaryList() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.slice(0, n) + "..." : str;
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const pad = (n) => String(n).padStart(2, "0");

    return (
      `${d.getFullYear()}-` +
      `${pad(d.getMonth() + 1)}- ` +
      `${pad(d.getDate())}  ` +
      `${pad(d.getHours())}:` +
      `${pad(d.getMinutes())}:` +
      `${pad(d.getSeconds())}`
    );
  };

  useEffect(() => {
    axios
      .post("http://localhost:9000/diary/diaryList")
      .then((res) => {
        const sortList = [...res.data].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setList(sortList);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.listContainer}>
      <div className={styles.container}>
        {list.length !== 0 ? (
          list.map((item) => (
            <>
              <div className={styles.content}>
                <img src={item.img} className={styles.img} />
                <div className={styles.diary}>
                  {truncate(item.otherMessage, 25)}
                </div>
              </div>
              <div className={styles.date}>{formatDate(item.date)} </div>
            </>
          ))
        ) : (
          <div className={styles.textContainer}>아직 작성한 글이 없습니다.</div>
        )}
      </div>
      <div className={styles.btn}>
        <Button
          value="일 기 쓰 기"
          onClick={() => navigate("/write")}
          className="createDiary"
        />
      </div>
    </div>
  );
}
