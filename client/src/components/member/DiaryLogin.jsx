import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../../css/DiaryLogin.module.css";
import dog from "../../../public/imgs/dog.jpeg";
import naverBtn from "../../../public/imgs/naver_btn2.png";

export default function DiaryLogin() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    const fetchLogin = async () => {
      e.preventDefault();
      const res = await axios
        .post("http://localhost:9000/member/login", { id, password })
        .then((res) => {
          if (res.data === 1) {
            navigate("/list");
          } else {
            alert("존재하지 않는 회원입니다.");
          }
        })
        .catch((error) => console.log(error));
    };
    fetchLogin();
  };

  const openNaverPopup = () => {
    console.log("버튼클릭");
    const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_NAVER_CALLBACK_URL;
    const state = Math.random().toString(36).substring(2, 15);
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&state=${state}`;

    window.open(NAVER_AUTH_URL, "naverLogin", "width=500, height=600");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginContainer}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={dog} className={styles.img} />
        </div>
        <div className={styles.info}>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <button type="submit" className={styles.btn}>
          로그인
        </button>
        <div className={styles.snsBtn}>
          <button
            type="button"
            onClick={openNaverPopup}
            className={styles.naver}
          >
            <img src={naverBtn} />
          </button>
        </div>
      </div>
    </form>
  );
}
