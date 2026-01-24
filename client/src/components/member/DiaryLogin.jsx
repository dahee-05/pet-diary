import styles from "../../css/DiaryLogin.module.css";
import dog from "../../../public/imgs/dog.jpeg";
import cat from "../../../public/imgs/cat.jpeg";
import { useState } from "react";

export default function DiaryLogin() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  // const handleChangeId = (e) => {
  //   console.log("ID-->", e.target.value);
  // };

  // const handleChangePwd = (e) => {
  //   console.log("PWD-->", e.target.value);
  // };

  const handleSubmit = () => {
    console.log("어서오시개");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginContainer}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={dog} className={styles.img} />
          {/* <img src={cat} className={styles.img} /> */}
        </div>
        <div className={styles.info}>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
          <input
            type="text"
            onChange={(e) => setPwd(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <button type="button" className={styles.btn}>
          로그인
        </button>
      </div>
    </form>
  );
}
