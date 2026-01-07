-- drop database diarydb;
CREATE DATABASE  IF NOT EXISTS `diarydb` ;
USE `diarydb`;
show tables;

-- -------------------------------------------
-- Table structure for table `member`
-- -------------------------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `id` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `name` varchar(10) NOT NULL,
  `phone` varchar(13) NOT NULL,
  `emailname` varchar(20) NOT NULL,
  `emaildomain` varchar(20) NOT NULL,
  `address` varchar(80) DEFAULT NULL,
  `detail_address` varchar(80) DEFAULT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  `reg_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `member`
--
LOCK TABLES `member` WRITE;
INSERT INTO `member` VALUES 
('test1','1111','홍길동','01012345678','kimdahee42','@gmail.com', NULL,NULL, NULL, '2025-03-26 18:14:27'),
('test2','1111','오어진','01012345678','rabbit0000','@gmail.com', NULL,NULL, NULL, '2025-03-26 19:14:27'),
('test3','1111','김다희','01012345678','aaaa12','@gmail.com', NULL,NULL, NULL, '2025-03-26 20:14:27'),
('test4','1111','오땡진','01012345678','abc1234','@gmail.com', NULL,NULL, NULL, '2025-03-26 18:14:28');
UNLOCK TABLES;

-- -------------------------------------------
-- Table structure for table `today_diary`
-- -------------------------------------------
DROP TABLE IF EXISTS `today_diary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `today_diary` (
  `num` int NOT NULL auto_increment primary KEY,
  `id` varchar(20) NOT NULL,
  `type` varchar(3) NOT NULL,
  `img` varchar(100) NOT NULL,
  `date` datetime NOT NULL,
  `myMessage` varchar(500) NOT NULL,
  `otherMessage` varchar(500) NOT NULL,
  KEY diary_fk_id(`id`),
  CONSTRAINT `diary_fk_id` FOREIGN KEY (`id`) REFERENCES `member` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO today_diary( num, id, type, img, date, myMessage, otherMessage) VALUES
(1, 'test1', '강아지', '/public/imgs/dog.jpeg', '2025-03-26 18:14:27', '망루는 화장지로 오늘 집안을 어지럽게 했어', '와앙! 오늘은 화장지로 집안을 엄청 어지럽혔어요! 조금 아이고, 조금 귀찮지만, 내가 이렇게 신나게 놀았으니 주인도 웃지 않을까? 다음엔 더 조심해서 깨끗하게 청소할게요!'),
(2, 'test1', '고양이', '/public/imgs/cat.jpeg', '2025-03-27 18:14:27', '망루는 화장지로 오늘 집안을 어지럽게 했어','으앗! 오늘 화장지로 집안을 난장판으로 만들었어요. 그게 너무 재미있어서 멈출 수 없었어요! 기분은 신나고 뽀송뽀송한 느낌이 살짝 걱정도 들긴 하지만, 오늘 하루는 정말 즐거운 모험이었답니다!'),
(3, 'test1', '강아지', '/public/imgs/dog.jpeg', '2025-03-28 18:14:27', '망루는 오늘 아무데나 배변을 봤어. 평소에는 안그러는데 오늘은 왜그랬을까?','오늘은 평소와 달리 어디든 배변을 봤어요! 아마도 화장실이 조금 더 마음에 들지 않거나, 혹은 새로운 냄새가 신기해서 그랬나봐요. 오늘 하루는 약간 불편하고, 조금은 혼란스럽기도 했지만, 그래도 귀여운 마음은 변함없어요! 오늘은 새롭고 약간 이상한 하루였지만, 그래도 행복한 마음으로 쉬어야겠어요.'),
(4, 'test2', '고양이', '/public/imgs/cat.jpeg', '2025-03-26 18:14:27', '망루는 화장지로 오늘 집안을 어지럽게 했어','와앙! 오늘은 화장지로 집안을 엄청 어지럽혔어요! 조금 아이고, 조금 귀찮지만, 내가 이렇게 신나게 놀았으니 주인도 웃지 않을까? 다음엔 더 조심해서 깨끗하게 청소할게요!'),
(5, 'test2', '고양이', '/public/imgs/cat.jpeg', '2025-03-27 18:14:27', '망루는 화장지로 오늘 집안을 어지럽게 했어','으앗! 오늘 화장지로 집안을 난장판으로 만들었어요. 그게 너무 재미있어서 멈출 수 없었어요! 기분은 신나고 뽀송뽀송한 느낌이 살짝 걱정도 들긴 하지만, 오늘 하루는 정말 즐거운 모험이었답니다!'),
(6, 'test2', '강아지', '/public/imgs/dog.jpeg', '2025-03-28 18:14:27', '망루는 오늘 아무데나 배변을 봤어. 평소에는 안그러는데 오늘은 왜그랬을까?','오늘은 평소와 달리 어디든 배변을 봤어요! 아마도 화장실이 조금 더 마음에 들지 않거나, 혹은 새로운 냄새가 신기해서 그랬나봐요. 오늘 하루는 약간 불편하고, 조금은 혼란스럽기도 했지만, 그래도 귀여운 마음은 변함없어요! 오늘은 새롭고 약간 이상한 하루였지만, 그래도 행복한 마음으로 쉬어야겠어요.');