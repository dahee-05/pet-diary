import { useLocation, useNavigate } from "react-router-dom";
import style from "./TranslationPage.module.css";
import { useEffect, useState } from "react";

export default function TranslationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {}; // undefined
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify([...list, item]));
  }, []);

  return (
    <div>
      <div>TranslationPage</div>
      <button onClick={() => navigate("/")}>메인이동</button>
    </div>
  );
}
