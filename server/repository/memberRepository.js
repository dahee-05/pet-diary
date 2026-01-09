import { db } from "./db.js";

/******************************
 * Member : 로그인
 ******************************/
export const getLogin = async (formData) => {
  const sql = `select count(*) as cnt 
     from member 
     where id=? and password=?`;

  const values = [formData.id, formData.password];
  const [result] = await db.execute(sql, values);
  return result[0].cnt;
};
