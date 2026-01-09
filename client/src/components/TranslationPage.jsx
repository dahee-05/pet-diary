import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../css/TranslationPage.module.css";
import Button from "./Button.jsx";

export default function TranslationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { diary } = location.state || {}; // undefined
  const [item, setItem] = useState(diary || {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/diary/diarySave", item)
      .then((res) => {
        res.data.result_rows === 1
          ? navigate("/")
          : alert("저장에 실패했습니다.");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const fetchOpenAI = async () => {
      const result = await axios
        .post("http://localhost:9000/diary/openaiApi", item)
        .then((res) => {
          setItem((prev) => ({ ...prev, otherMessage: res.data }));
        })
        .catch((error) => console.log(error));
    };
    fetchOpenAI();
  }, []);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <img className={styles.img} src={item.img} />
      <textarea
        className={styles.textArea}
        value={item.otherMessage}
        onChange={(e) => handleChange(e)}
      />
      <div className={styles.btn}>
        <Button
          value="다시하기"
          onClick={() => navigate("/write")}
          className="retry"
        />
        <Button type="submit" value="저장하기" className="diarySave" />
      </div>
    </form>
  );
}
