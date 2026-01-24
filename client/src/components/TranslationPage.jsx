import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOpenAI, diarySave } from "../service/api.js";
import Button from "./Button.jsx";
import styles from "../css/TranslationPage.module.css";

export default function TranslationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { diary } = location.state || {}; // undefined
  const queryClient = useQueryClient();

  const { data: item = [] } = useQuery({
    queryKey: ["openai", diary],
    queryFn: () => getOpenAI(diary),
  });

  const uploadMutation = useMutation({
    mutationFn: (item) => diarySave(item),
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["list"] });
    },
    onError: () => {
      alert("저장에 실패했습니다. 다시 시도해주세요.");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadMutation.mutate(item);
  };

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
