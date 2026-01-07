import { db } from "./db.js";

/******************************
 * Diary : 다이어리 리스트 조회
 ******************************/
export const getDiaryList = async () => {
  const sql = `select * from today_diary`;

  const [result] = await db.execute(sql);
  return result;
};

/******************************
 * Diary : 다이어리 CREATE
 ******************************/
export const setDiary = async (formData) => {
  const sql = `insert into today_diary(id, type, img, date, myMessage, otherMessage)values(?,?,?,now(),?,?)`;

  const values = [
    formData.id,
    formData.type,
    formData.img,
    formData.myMessage,
    formData.otherMessage,
  ];
  const [result] = await db.execute(sql, values);
  return { result_rows: result.affectedRows };
};
