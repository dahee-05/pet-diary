import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./TranslationPage.module.css";
import Button from "./Button.jsx";

export default function TranslationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {}; // undefined
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    // localStorage.setItem("list", JSON.stringify([...list, item]));
  }, []);

  const hadleRetry = () => {
    console.log("다시하기");
    navigate("/write");
  };

  const handleSubmit = () => {
    console.log("저장하기");
    localStorage.setItem("list", JSON.stringify([...list, item]));
    navigate("/");
  };

  return (
    <form className={styles.container}>
      <img className={styles.img} src={item.img} />
      <textarea
        className={styles.textArea}
        value={item.myMessage}
        onChange={(e) => handleChange(e)}
      />
      <div className={styles.btn}>
        <Button
          type="button"
          value={"다시하기"}
          onClick={hadleRetry}
          className="retry"
        />
        <Button
          type="submit"
          value={"저장하기"}
          onClick={handleSubmit}
          className="diarySave"
        />
      </div>
    </form>
  );
}
