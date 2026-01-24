import axios from "axios";

export async function getList() {
  try {
    const res = await axios.post("http://localhost:9000/diary/diaryList");
    const sortList = [...res.data].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    return sortList;
  } catch (error) {
    console.log(error);
  }
}

export async function getOpenAI(value) {
  try {
    const res = await axios.post(
      "http://localhost:9000/diary/openaiApi",
      value,
    );
    return { ...value, otherMessage: res.data };
  } catch (error) {
    console.log(error);
  }
}

export async function diarySave(item) {
  try {
    const res = await axios.post("http://localhost:9000/diary/diarySave", item);
    return res.data.result_rows;
  } catch (error) {
    console.log(error);
  }
}
