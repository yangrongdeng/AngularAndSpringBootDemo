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

 Date: 25/05/2020 21:01:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for lose
-- ----------------------------
DROP TABLE IF EXISTS `lose`;
CREATE TABLE `lose` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `keyWord` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `des` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `concat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userNumber` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createTime` datetime NOT NULL,
  `status` int(16) NOT NULL DEFAULT '0',
  `checkNumber` int(16) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of lose
-- ----------------------------
BEGIN;
INSERT INTO `lose` VALUES (2, '食堂门口捡到一支手表', '卡西欧手表', '本人在天仙配门口捡到一个卡西欧手表，失主按照以下联系方式认领', '小白兔', '24586323388@qq.com', '2016', '2020-05-09 02:46:29', 0, 0);
INSERT INTO `lose` VALUES (3, '王美丽同学的中药证放到门卫处了', '王美丽', '我在大门口捡到王美丽的中药证，已经放在门卫大爷那了，注意去拿', '小白兔', '24586323388@qq.com', '2016', '2020-05-09 02:48:51', 0, 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
