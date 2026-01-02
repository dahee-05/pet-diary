import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DiaryList.module.css";
import Button from "./Button.jsx";

export default function DiaryList() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const handleClick = () => {
    navigate("/write");
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("list")) || [];
    const sortList = [...list]
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .reverse();
    setList(sortList);
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
              <div className={styles.date}>{item.date} </div>
            </>
          ))
        ) : (
          <div className={styles.textContainer}>아직 작성한 글이 없습니다.</div>
        )}
      </div>
      <div className={styles.btn}>
        <Button
          type="button"
          value="일 기 쓰 기"
          onClick={handleClick}
          className="createDiary"
        />
      </div>
    </div>
  );
}
