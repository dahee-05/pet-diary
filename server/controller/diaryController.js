import * as repository from "../repository/diaryRepository.js";
import openai from "../service/openai.service.js";

/******************************
 * Diary : 다이어리 목록 READ
 ******************************/
export const getDiaryList = async (req, res) => {
  const result = await repository.getDiaryList(req.body);
  res.json(result);
};

/******************************
 * Diary : 다이어리 CREATE
 ******************************/
export const setDiary = async (req, res) => {
  const result = await repository.setDiary(req.body);
  res.json(result);
};

/******************************
 * Diary : 다이어리 OpenAI API 호출
 ******************************/
export const getOpenaiApi = async (req, res) => {
  try {
    const result = await openai(req.body);
    res.json(result);
  } catch (error) {
    console.log("server openai api ERROR-->", error);
  }
};
