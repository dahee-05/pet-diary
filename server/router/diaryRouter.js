import express from "express";
import * as controller from "../controller/diaryController.js";

const router = express.Router();

router
  .post("/diaryList", controller.getDiaryList)
  .post("/diarySave", controller.setDiary)
  .post("/openaiApi", controller.getOpenaiApi);

export default router;
