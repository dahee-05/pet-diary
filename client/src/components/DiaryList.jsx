import { useNavigate } from "react-router-dom";
import styles from "../css/DiaryList.module.css";
import Button from "./Button.jsx";
import { useQuery } from "@tanstack/react-query";
import { getList } from "../service/api.js";

export default function DiaryList() {
  const navigate = useNavigate();

  const { data: list = [], isSuccess } = useQuery({
    queryKey: ["list"],
    queryFn: getList,
  });

  // if (isSuccess) console.log(list);

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
