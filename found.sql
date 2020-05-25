/*
 Navicat Premium Data Transfer

 Source Server         : mac
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost:3306
 Source Schema         : lost_and_found

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : 65001

 Date: 25/05/2020 21:01:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for found
-- ----------------------------
DROP TABLE IF EXISTS `found`;
CREATE TABLE `found` (
  `id` int(16) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `des` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `keyWord` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `concat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `grade` int(16) NOT NULL DEFAULT '0',
  `userNumber` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(16) NOT NULL DEFAULT '0',
  `createTime` datetime NOT NULL,
  `useGrade` int(16) NOT NULL,
  `checkNumber` int(255) NOT NULL DEFAULT '0' COMMENT '0:未，1：已，3',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of found
-- ----------------------------
BEGIN;
INSERT INTO `found` VALUES (3, '有人被子收错吗，白色花纹', '今天上午在女寝二栋楼下我的被子不见了，可能有哪位小仙女收错，请及时归还呀！！！急急急，夜晚太冷了，若拿错请联系我，2栋115', '被子', '小白兔', '34586323388@qq.com', 0, '2016', 0, '2020-05-09 00:00:00', 1, 2);
INSERT INTO `found` VALUES (5, '急寻3栋门外桌上的高数书!', '本人于2020年2月15日下午三点左右将高数书放在3栋门口的桌上，等回来时已经不见，若有同学看到或者有相关信息提供请联系,16医药信息工程学院二班李秋水', '高数书', '李秋水', '2458632988@qq.com', 5, '2016', 0, '2020-05-08 22:21:15', 1, 1);
INSERT INTO `found` VALUES (13, '1', '1', '1', '刘胜男', '17764472836', 0, '2016207320145', 1, '2020-05-16 19:19:56', 2, 0);
INSERT INTO `found` VALUES (14, '11', '1', '11', '1', '1', 0, '2016', 1, '2020-05-16 22:10:17', 2, 0);
INSERT INTO `found` VALUES (15, '12', '1', 'w', '2016207320144', '16级医软3班', 0, '2016', 1, '2020-05-17 00:14:40', 2, 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
